# CUET Bus Management System

## Overview
The **CUET Bus Management System** is a MERN stack application designed to facilitate bus seat reservations and management for CUET students and staff. It provides user authentication, seat booking, and admin controls.

## Features
- User Authentication (Login/Register)
- Bus Seat Reservation
- Admin Dashboard
- Payment Integration (if applicable)
- Real-time Booking Status

## Tech Stack
- **Frontend:** React.js (Hosted on Vercel)
- **Backend:** Express.js with MongoDB (Hosted on Render)
- **Database:** MongoDB Atlas
- **Authentication:** JWT
- **Deployment:** Vercel (Frontend), Render (Backend)
- **Containerization:** Docker

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- Node.js (v16+ recommended)
- MongoDB (local or Atlas)
- Docker (optional for containerized setup)
- Git

### Clone the Repository
```sh
git clone https://github.com/yourusername/cuet-bus.git
cd cuet-bus
```

### Backend Setup
1. Navigate to the server folder:
   ```sh
   cd server
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and configure environment variables:
   ```env
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```
4. Start the backend server:
   ```sh
   npm start
   ```

### Frontend Setup
1. Navigate to the client folder:
   ```sh
   cd ../client
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and configure:
   ```env
   REACT_APP_API_BASE_URL=https://cuet-bus-1.onrender.com
   ```
4. Start the frontend server:
   ```sh
   npm start
   ```

## Running with Docker
You can run both frontend and backend using Docker.

### Build and Run Containers
1. Navigate to the project root folder and run:
   ```sh
   docker-compose up --build
   ```
2. This will spin up the backend and frontend containers automatically.

### Docker Compose Configuration (`docker-compose.yml`)
```yaml
version: '3.8'
services:
  backend:
    build: ./server
    ports:
      - "5000:5000"
    env_file:
      - ./server/.env
    depends_on:
      - mongo
  frontend:
    build: ./client
    ports:
      - "3000:3000"
    environment:
      - REACT_APP_API_BASE_URL=http://backend:5000
    depends_on:
      - backend
  mongo:
    image: mongo
    ports:
      - "27017:27017"
```

## Deployment

### Backend Deployment (Render)
1. Push your server code to GitHub.
2. Go to [Render](https://render.com/) and create a new **Web Service**.
3. Connect your GitHub repository.
4. Set environment variables from `.env`.
5. Deploy!

### Frontend Deployment (Vercel)
1. Push your client code to GitHub.
2. Go to [Vercel](https://vercel.com/) and import your project.
3. Set environment variables.
4. Deploy!

## Troubleshooting

### Common Issues
1. **MongoDB Connection Failed**: Ensure your MongoDB URI is correctly set and IP is whitelisted.
2. **API Calls Not Working (405 Error)**: Check if `REACT_APP_API_BASE_URL` is correctly set in `.env`.
3. **CORS Issues**: Add proper CORS configuration in the backend.

## License
This project is licensed under the MIT License.

---
Feel free to contribute and make this project better! 🚀

