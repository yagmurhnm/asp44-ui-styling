\let\oldclearpage\clearpage
\let\clearpage\relax
# Technical architecture
\let\clearpage\oldclearpage
## Front-end
Different frameworks like React, Angular, Vue, or Flutter have been considered.
However, team members did not know how to use these frameworks or were not familiar with them.
For this reason, and considering the limited time available,
Ionic UI framework and Capacitor runtime have been chosen.

The specificity of this solution is the ability to build the application using pure Javascript.
Ionic bring its own interface components, while Capacitor lets access to native mobile device features with Javascript.
This solution is fully cross-platform. It works both on iOS and Android (and also on web browsers).
It gives the advantage of having a unique codebase for all these derivations.

![Front-end architecture](./img/clientStack.png)

\newpage

## Back-end
Several pieces of information need to be shared between users, like profile details, routes, or bookings.
Thus, we must store these data in a remote database accessible to all clients.

We have chosen Node.js to set up the web service because it is a Javascript runtime environment,
which means that both our back-end and front-end will use the same language that all team members already know.
On top of that, the Express web application will handle HTTP requests and let build a RESTful API.
At last, the database will be supported by MySQL, a technology with which team members are familiar.

![Back-end architecture](./img/serverStack.png)