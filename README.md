
# ConnectSphere - A Professional Networking Platform



https://github.com/user-attachments/assets/41ee73cf-c549-4a42-ba5e-7d4df2b3ecb1




Welcome to ConnectSphere, a modern and functional clone of a professional networking platform. This application is built from the ground up using React, TypeScript, and Tailwind CSS to deliver a clean, responsive, and intuitive user experience. It simulates the core functionalities of platforms like LinkedIn, providing a robust foundation for a feature-rich social network.

## Core Features

ConnectSphere is packed with features that enable users to build their professional identity, connect with others, and explore career opportunities.

-   **Interactive User Feed:** Create and view posts with text and images. Engage with content through fully functional likes and comments.
-   **Dynamic User Profiles:** View detailed user profiles, including professional summaries, work experience, and education history.
-   **Global User Search:** A powerful, real-time search bar in the header allows you to find and navigate to any user's profile on the platform.
-   **Professional Networking:** Manage your professional circle by accepting or ignoring connection invitations and viewing your list of current connections.
-   **Real-time Messaging:** Engage in private, one-on-one conversations. New messages appear instantly, and you can easily edit messages you've already sent.
-   **Community Groups:** Create, join, and participate in discussions within groups based on shared interests or industries. Each group has its own dedicated feed.
-   **Mentorship Hub:** Find experienced mentors based on their expertise or sign up to become a mentor yourself to guide others.
-   **Job Board:** Browse and search for job opportunities. Save jobs for later or "apply" directly through the platform.
-   **Notifications:** Stay updated with real-time notifications for likes, comments, and connection requests, with a clear indicator for unread alerts.

## How to Run This Application

This project is designed to run seamlessly within its specific web-based development environment. There is no complex setup required.

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`

## Project Structure

The codebase is organized into a clear and maintainable structure:

-   `components/`: Contains reusable React components used across various pages (e.g., `Header`, `PostCard`, `ProfileCard`).
-   `pages/`: Contains the main page components that are rendered by React Router (e.g., `Feed`, `Profile`, `Messaging`).
-   `data/`: Includes mock data files that simulate a backend database, providing the app with users, posts, jobs, etc.
-   `types.ts`: Defines all the TypeScript interfaces for the application's data structures (e.g., `User`, `Post`, `Job`).
-   `constants.tsx`: Stores constant values, primarily SVG icons used throughout the UI.
-   `App.tsx`: The root component that sets up the main layout and routing for the application.

## Technologies Used

-   **Frontend:** [React](https://reactjs.org/) (with Hooks)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Routing:** [React Router](https://reactrouter.com/)
-   **Data:** Static mock data (no backend)

