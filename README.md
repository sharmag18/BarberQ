# BarberQ

BarberQ is a web-based queue management system for salons and barbershops. It provides a modern website for customers, barbers, and admins to manage appointments and queues efficiently.

## Features
- User registration and login (role-based: Customer, Barber, Admin)
- Secure authentication (JWT)
- Customers can join/leave queues
- Barbers can manage their queues
- Admins can view all users and queues
- Responsive, user-friendly website interface

## Tech Stack
- **Frontend:** React (website, not a native app)
- **Backend:** Java Spring Boot
- **Database:** MongoDB
- **Build Tools:** Maven (backend), npm (frontend)

## Project Structure
- `BarberQ-backend/` — Java Spring Boot backend API
- `barberq-frontend/` — React website frontend

## Getting Started

### Prerequisites
- Node.js (for frontend)
- Java 17 (for backend)
- MongoDB (for backend database)

### Backend Setup
1. Open a terminal and navigate to the backend directory:
   ```sh
   cd BarberQ-backend
   ```
2. Install dependencies and run the backend:
   ```sh
   mvn spring-boot:run
   ```
3. The backend will start on [http://localhost:8080](http://localhost:8080)

### Frontend (Website) Setup
1. Open a new terminal and navigate to the frontend directory:
   ```sh
   cd barberq-frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the website:
   ```sh
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage
- Visit the website, register as a user, and log in.
- The dashboard and features will adapt based on your role (customer, barber, admin).
- All actions are performed via the website interface.

---

*For any issues or contributions, please open an issue or pull request.* 