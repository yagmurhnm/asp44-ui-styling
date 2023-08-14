# Specifications
The software is decomposed into several modules described in this section.
Specifications for each module include a short description, a use case, and a class diagram.
The complete UML class diagram is included in the appendix.
The Model-View-Controller pattern has been chosen to organise the codebase and allow team members to work simultaneously on different parts.
It should also ease testing, especially unit testing.

![Sequence diagram of a general communication between client and server using MVC pattern on the client-side](./img/seqDiagramClientServer.png)

\newpage
## User module

\begin{minipage}[t]{0.5\textwidth}
\vspace{0pt}
The user module will include all elements that let a user create an account or log into the system.
It will also integrate user details constituting their profiles and the ability to change some information, such as the username or the password.
\end{minipage}
\begin{minipage}[t]{0.5\textwidth}
\vspace{0pt}
\includegraphics[width=\textwidth]{./img/useCaseUser.png}
\captionof{figure}{Use case - User module}
\end{minipage}

![UML Class diagram for the user module](./img/umlClassUser.png)

\newpage
## Map visualizer

\begin{minipage}[t]{0.5\textwidth}
\vspace{0pt}
This module should let the user see and interact with a map (move around, zoom in and out).
All routes and stations will be materialized on the map and should be clickable to show details.
\end{minipage}
\begin{minipage}[t]{0.5\textwidth}
\vspace{0pt}
\includegraphics[width=\textwidth]{./img/useCaseMap.png}
\captionof{figure}{Use case - Map visualizer}
\end{minipage}

![UML Class diagram for the map visualizer](./img/umlClassMap.png)

\newpage
## Trip planner

\begin{minipage}[t]{0.5\textwidth}
\vspace{0pt}
A user should be able to visualize existing trips and join them.
The system allows planning a new trip at a desired date on a specific route from a start to an end station. The user should be able to locate the trip on the map and visually identify stations. The system will provide the distance of the trip and an estimation of the duration.
\end{minipage}
\begin{minipage}[t]{0.5\textwidth}
\vspace{0pt}
\includegraphics[width=\textwidth]{./img/useCaseTrip.png}
\captionof{figure}{Use case - Trip planner}
\end{minipage}

![UML Class diagram for the trip planner](./img/umlClassTrip.png)

\newpage
## Booking system

\begin{minipage}[t]{0.5\textwidth}
\vspace{0pt}
The booking system allows the reservation of a trip.
It manages and organizes all bookings of the user and displays them on a specific page.
The user should be able to cancel a booking and consult details. The system will prevent booking multiple trips on the same date and time.
\end{minipage}
\begin{minipage}[t]{0.5\textwidth}
\vspace{0pt}
\includegraphics[width=\textwidth]{./img/useCaseBooking.png}
\captionof{figure}{Use case - Booking system}
\end{minipage}

![UML Class diagram for the booking system](./img/umlClassBooking.png)

\newpage
## Tracking system

\begin{minipage}[t]{0.5\textwidth}
\vspace{0pt}
The tracking system checks the geolocation of the user against existing stations.
It should notify the game module when the user is near a station during an ongoing trip.
\end{minipage}
\begin{minipage}[t]{0.5\textwidth}
\vspace{0pt}
\includegraphics[width=\textwidth]{./img/useCaseTracking.png}
\captionof{figure}{Use case - Tracking system}
\end{minipage}

![UML Class diagram for the tracking system](./img/umlClassTracking.png)

\newpage
## Game module

\begin{minipage}[t]{0.5\textwidth}
\vspace{0pt}
This module will manage the users' achievements and collectables earned on the routes.
The system should be able to randomly generate collectables and display them on the map.
Collectables are clickable to reveal details. The system should reward achievements following predefined levels.
\end{minipage}
\begin{minipage}[t]{0.5\textwidth}
\vspace{0pt}
\includegraphics[width=\textwidth]{./img/useCaseGame.png}
\captionof{figure}{Use case - Game module}
\end{minipage}

![UML Class diagram for the game module](./img/umlClassGame.png)

\newpage
## Minimum viable product
The number of features elaborated in this preliminary work is quite large for the given time.
Thus, the minimum viable product will be focused on user, map, trip, and booking modules
which form the core components of the application.
Tracking and game modules will be treated as additional components during the last iterations if the remaining time lets the team finish these modules.
