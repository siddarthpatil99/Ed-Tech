# Ed-Tech

Ed-Tech is an educational platform developed with the MERN (MongoDB, Express.js, React.js, Node.js) stack. It facilitates online learning experiences for both students and instructors.

## Features

### Authentication

- **Signup with Email OTP:** Users can sign up by providing their email address and verifying it using a one-time password (OTP).
- **Signin and Logout:** Users can sign in to their accounts and log out when they're done.

### Dashboards

- **Student Dashboard:** Students have access to a dashboard where they can view courses added by instructors and watch educational videos.
- **Instructor Dashboard:** Instructors have a separate dashboard where they can add new courses and delete the courses they've added.

### Course Management

- **Add and Delete Courses:** Instructors can add new courses to the platform, including details like course title, description, and video content. They also have the ability to delete the courses they've added.

### Video Playback

- **Integrated YouTube Videos:** Educational videos are played within the platform using the `react-youtube` component. This ensures a seamless learning experience for students.

### Toast Notifications

- **Toast Notifications:** The platform utilizes toast notifications to provide feedback to users about their actions, such as successful course additions or errors during login.

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ed-tech.git
```

### 2. Navigate to the Project Directory
```
cd ed-tech
```

### 3. Install Dependencies
Backend Dependencies
```
cd backend && npm install
```
Frontend Dependencies
```
cd ../frontend && npm install
```

### Configuration
Backend Configuration
Create a .env file in the backend directory.
Set the following environment variables in the .env file:
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
SECRET_KEY=your_secret_key_for_jwt
```

### Frontend Configuration
Update the config.js file in the frontend/src/utils directory.
Set the appropriate API endpoint in the config.js file.

### Usage
Start the Backend Server:
```
cd backend && npm start
```

Start the Frontend Development Server:
```
cd frontend && npm start
```

View the Application:
Open your web browser and go to http://localhost:3000 to view the application.



