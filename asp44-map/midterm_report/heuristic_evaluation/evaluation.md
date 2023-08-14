# Heuristics evaluation

**1. Visibility of system status**

- Navigation icons, buttons, linkable tabs ("Settings", "Sign Out", "Change Username", "Change Password"), 
  and editable fields ("Enter new username", "Enter new password") are displayed with varieties of mouse cursor icons to indicate different states (pointing cursor with the arrow icon, selection/hovering cursor with the hand icon, text insertion cursor with blinking line icon).
- Navigation icons should be changed to transparent mode, or their text color should be changed when selected.
- Buttons should be disabled (changed with "…") to represent loading/in progress (response from the back-end).
  When Sign In is clicked, it should display a loading icon/loading screen before the application screen.
  When Sign Out is clicked, it should link back to the Sign In screen.
- Create New Session and Routes have a status to indicate each process step.
  Routes status should be changed. Currently, it displays "Select a line" for all steps.
- "Session Created"/"Booking Successful" screen with a "close" button is implemented.
- The system should redirect the user to the navigating page.

**2. Match between system and real-world**

- Implement common designs (from users' surveys/feedback). For instance: clickable navigation icons at the bottom, etc.,
- Design with common language/vocabulary rather than academic terms. For instance: between Login / Sign In.
  Create New Session should be changed to Create Custom Route.

**3. User control and freedom**

- Backward steps button and a clickable progress bar in "Create New Session".
- Navigation icons are clickable during the booking process. The booking process will be canceled if one of the icons is pressed.
- Consider the line track to be tappable/clickable as well

**4. Consistency and standards**

- Color schemes and look and feel are designed based on users' surveys.
- Color, font styles, icons, and themes are chosen and applied across pages.

**5. Error prevention (no back-end result/information feedback)**

- Front-end validations: email, password (change password), terms accept options.
- When details are clicked to confirm booking, a date must be chosen (or the current date will be automatically applied).
- Station must be chosen before the Select button is clicked. The date and time must be chosen before confirmation.

**6. Recognition rather than recall**

- Booking details display full information.
- Confirm booking (in "Start New Session") displays full information.

**7. Flexibility and efficiency of use**

- The booking box is clicked to cancel.

**8. Aesthetic and minimalist design**

- Booking details simply allow interaction with Booking button. No booking options are available.
- User Tracking graphs show data and don't require user interaction.

**9. Help users recognize, diagnose, and recover from errors**

- In "confirm password": suggest users retype if it does not match.
- In "forgot password": alert if the email is not in the database.
- In "change username": alert if the new username is in the database.
- In "Create New Session": suggest users to choose a station, date, and time before confirming.
- In Routes: suggest users to choose a date.

**10. Help and documentation**

- The help button is implemented with FAQs.
- Live Chat / Technical Support hotline may be implemented in the future.