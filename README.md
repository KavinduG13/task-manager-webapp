# Task Manager Web Application

A modern, full-stack task management application built with React, TypeScript, and Node.js.

## 🚀 Features

- Create, read, update, and delete tasks
- Filter and sort tasks
- Real-time updates
- Responsive design
- TypeScript support for both frontend and backend
- RESTful API architecture

## 📦 Tech Stack

### Frontend
- React with TypeScript
- Vite for build tooling
- Axios for API calls
- CSS for styling

### Backend
- Node.js with TypeScript
- Express.js for REST API
- File-based storage system
- Error handling middleware

## 🛠️ Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup and Installation

1. Clone the repository:
```bash
git clone https://github.com/KavinduG13/task-manager-webapp.git
cd task-manager-webapp
```

2. Install Backend Dependencies:
```bash
cd tm-backend
npm install
```

3. Install Frontend Dependencies:
```bash
cd ../tm-frontend
npm install
```

## 🚀 Running the Application

### Backend
1. Navigate to the backend directory:
```bash
cd tm-backend
```

2. Start the development server:
```bash
npm run dev
```

The backend server will start on `http://localhost:3000`

### Frontend
1. Navigate to the frontend directory:
```bash
cd tm-frontend
```

2. Start the development server:
```bash
npm run dev
```

The frontend application will start on `http://localhost:5173`

## 📁 Project Structure

### Frontend Structure
```
tm-frontend/
├── src/
│   ├── api/          # API configuration and services
│   ├── components/   # React components
│   ├── types/        # TypeScript type definitions
│   ├── App.tsx       # Main application component
│   └── main.tsx      # Application entry point
```

### Backend Structure
```
tm-backend/
├── src/
│   ├── controllers/  # Request handlers
│   ├── routes/       # API routes
│   ├── middleware/   # Custom middleware
│   ├── types/        # TypeScript type definitions
│   └── utils/        # Utility functions
```

##  Author

**Kavindu Karunarathna**
- GitHub: [@KavinduG13](https://github.com/KavinduG13)