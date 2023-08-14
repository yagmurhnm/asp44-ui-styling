require("dotenv").config()

const express = require("express")
const router = express()
const mysql = require("mysql2")
const bcrypt = require("bcrypt")
const cors = require('cors');

const DB_HOST = "127.0.0.1";
const DB_USER = "mrun_admin";
const DB_PASSWORD = "meetandrunASP44";
const DB_DATABASE = "mrunDB";
const DB_PORT = 3306;
const PORT = 3000;

const db = mysql.createPool({
    connectionLimit: 100,
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    port: DB_PORT
})

// Connect to the MySQL database
db.getConnection((err, connection) => {
    if (err) throw (err)
    console.log("Successful connection to the database.")
})

router.use(cors({ origin: 'http://127.0.0.1:5173' }));

// Start Express HTTP server to listen incoming requests
const port = process.env.PORT
router.listen(port, () => console.log(`Server Started on port ${port}...`))
router.use(express.json())

// Function to execute a query and return a promise
// It lets use async/await properly without using nested await for multiple requests
function executeQuery(connection, query, values) {
    return new Promise((resolve, reject) => {
        connection.query(query, values, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

// --------------
// USER CREATION
// --------------
/**
 * Create a new user.
 *
 * The function will add a new user entry associated to a new account entry in the dedicated tables.
 * Email is checked before insertion to ensure the user doesn't already exist.
 *
 * @async
 * @function
 * @param {Object} req - The request object containing user account details in the body.
 * @param {Object} res - The response object to send the HTTP response.
 * @returns {Promise<void>} 
 * - 201 status code if the user account is successfully created.
 * - 409 status code if the account already exists.
 * - 500 status code if there was an error during the process.
 */
async function createUser(req, res) {
    try {
        // Get account details from the request body
        const { email, password } = req.body;

        // Hash the password a second time (already hashed on the client-side)
        const hashedPassword = await bcrypt.hash(password, 10);

        // Get user details from the request body
        const { username, gender, birthDate } = req.body;

        // Get the current date and format it appropriatly to be sent to the MySQL database
        const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');

        // Check if the email already exists in the database
        const searchEmailQuery = "SELECT * FROM Account WHERE email = ?";
        const searchEmailResults = await executeQuery(db, searchEmailQuery, [email]);

        // If account already exists
        if (searchEmailResults.length !== 0) {
            res.status(409).json({
                success: false,
                message: 'This account already exists.',
            });
            return;
        }

        // Create the user
        const insertUserSql = "INSERT INTO User VALUES (null, ?, null, ?, ?, null, ?)";
        const insertUserResults = await executeQuery(db, insertUserSql, [username, gender, birthDate, currentDate]);
        const userId = insertUserResults.insertId;

        // Create the account
        const insertAccountQuery = "INSERT INTO Account VALUES (null,?, ?, ?)";
        await executeQuery(db, insertAccountQuery, [userId, email, hashedPassword]);

        // Return a 201 success status code
        res.status(201).json({
            success: true,
            message: 'Account successfully created.',
        });
    } catch (err) {
        // Return an error status code if the process failed
        res.status(500).json({
            success: false,
            message: 'Unable to create the account.',
        });
    }
}

// ---------------
// AUTHENTICATION
// ---------------
/**
 * Log a user into the system.
 *
 * This function authenticate the user from the email and password provided.
 *
 * @async
 * @function
 * @param {Object} req - The request object containing user email and password in the body.
 * @param {Object} res - The response object to send the HTTP response.
 * @returns {Promise<void>} 
 * - 401 status code if the password is not correct.
 * - 404 status code if the user account does not exist.
 * - 500 status code if there was an error during the process.
 */
async function login(req, res) {
    try {
        // Get account details from the request body
        const { email, password } = req.body;

        // Check if the email exists in the database
        const searchEmailQuery = "SELECT * FROM Account WHERE email = ?";
        const searchEmailResults = await executeQuery(db, searchEmailQuery, [email]);

        // If the email is not found, the account doesn't exist
        if (searchEmailResults.length === 0) {
            res.status(404).json({
                success: false,
                message: 'This account does not exist.',
            });
            return;
        }

        // Get the hashed password associated to the account
        const hashedPassword = searchEmailResults[0].password;

        // Compare the provided password with the one in the database
        const isPasswordCorrect = await bcrypt.compare(password, hashedPassword);

        if (isPasswordCorrect) {
            res.status(200).json({
                success: true,
                message: 'Login successful.',
            });
        } else {
            res.status(401).json({
                success: false,
                message: 'Incorrect password.',
            });
        }

    } catch (err) {
        // Return an error status code if the process failed
        res.status(500).json({
            success: false,
            message: 'Unable to login.',
        });
    }
}

// -------
// ROUTES
// -------
/**
 * @api {post} /createUser Create a new user
 * @apiName CreateUser
 * @apiGroup User
 *
 * @apiParam {String} email The email address of the user.
 * @apiParam {String} password The hashed password for the new account.
 * @apiParam {String="male","female","unknown"} gender The gender of the user.
 * @apiParam {String} birthDate The birth date of the new user (YYYY-MM-DD).
 *
 * @apiSuccess (201) {Number} status User account successfully created.
 * @apiError (409) {Number} status The account already exists.
 * @apiError (500) {Number} status Error during the process.
 *
 */
router.post('/createUser', createUser);

/**
 * @api {post} /login Authenticate user
 * @apiName Login
 * @apiGroup User
 *
 * @apiParam {String} email The email address of the user.
 * @apiParam {String} password The hashed password of the user.
 *
 * @apiSuccess (401) {Number} status The password is not correct.
 * @apiError (404) {Number} status The user account does not exist.
 * @apiError (500) {Number} status There was an error during the process.
 */
router.post('/login', login);
