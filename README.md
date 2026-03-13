# Smart Support API

![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![Express](https://img.shields.io/badge/Express.js-REST%20API-black)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)
![JWT](https://img.shields.io/badge/JWT-Auth-orange)
![Swagger](https://img.shields.io/badge/Swagger-API%20Docs-brightgreen)
![Status](https://img.shields.io/badge/Status-Version%201-blue)
![Focus](https://img.shields.io/badge/Focus-Backend-blueviolet)

A backend project created to simulate a support ticket system with authentication, ticket management, comments, history tracking, dashboard metrics, and Swagger documentation.

---

## Project Highlights

- JWT authentication with protected routes
- Ticket creation and status management
- Automatic priority calculation
- Comment system by ticket
- Ticket history tracking
- Dashboard with ticket metrics
- Swagger documentation for API routes

---

## About this project

I created this project to practice backend development with something that feels more like a real system and less like a basic CRUD from tutorials.

The main idea is to build an API where users can create support tickets, update ticket status, add comments, track ticket history, and view dashboard data in a structured way.

I wanted to work on something that could help me improve my skills with Node.js, Express, MongoDB, REST APIs, authentication, middleware, and backend organization.

---

## Goals

- Practice backend development with a more realistic project
- Build a REST API with a clean folder structure
- Work with authentication and protected routes
- Create ticket, comment, and history models
- Practice business rules and data relationships
- Add dashboard endpoints
- Document the API with Swagger
- Build a portfolio project as a backend student

---

## Tech Stack

- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- bcryptjs
- dotenv
- cors
- Swagger UI Express
- swagger-jsdoc

---

## Features

### Authentication
- User registration
- User login
- JWT token generation
- Protected routes
- Get current authenticated user

### Tickets
- Create ticket
- List all tickets
- Get ticket by id
- Update ticket
- Close ticket
- Reopen ticket

### Business Rules
- Automatic priority calculation
- Category validation
- Status transition flow
- Access control by ticket owner or admin

### Comments
- Add comment to ticket
- List comments by ticket

### History
- Register important ticket changes
- Store status changes
- Store priority changes

### Dashboard
- Count open tickets
- Count resolved tickets
- Count critical tickets
- Group tickets by category

### Documentation
- Swagger API documentation
- Interactive route visualization at `/api-docs`

---

## Project Structure

```bash
src/
  config/
    db.js
    swagger.js
  controllers/
    authController.js
    commentController.js
    dashboardController.js
    historyController.js
    ticketController.js
  middleware/
    authMiddleware.js
  models/
    Comment.js
    History.js
    Ticket.js
    User.js
  routes/
    authRoutes.js
    commentRoutes.js
    dashboardRoutes.js
    historyRoutes.js
    ticketRoutes.js
  services/
    ticketService.js
  utils/
    generateToken.js
  app.js
  server.js
Current Status

Version 1 completed.

This project currently includes:

Authentication

Ticket management

Business rules

Comments

History tracking

Dashboard endpoints

Swagger documentation

Main Entities
User

name

email

password

role

Ticket

title

description

category

impact

priority

status

createdBy

Comment

ticket

author

message

History

ticket

field

oldValue

newValue

changedBy

Why I built this project

Most beginner backend projects are things like to-do lists or simple CRUD systems.

I wanted to build something a little different, with a scenario that feels more real and with more business logic involved. A support ticket system looked like a good choice because it allows me to practice authentication, relationships between models, status flow, permissions, comments, and history tracking in the same project.

This project is also part of my learning journey as a Computer Science student focused on backend development.

Installation

Clone the repository:

git clone https://github.com/ThiagoMF1/smart-support-api.git

Enter the project folder:

cd smart-support-api

Install dependencies:

npm install
Environment Variables

Create a .env file in the root folder and add:

PORT=3000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
Run the Project

Development mode:

npm run dev

Production mode:

npm start
API Base URL
http://localhost:3000
Main Routes
Auth

POST /api/auth/register

POST /api/auth/login

GET /api/auth/me

Tickets

POST /api/tickets

GET /api/tickets

GET /api/tickets/:id

PUT /api/tickets/:id

PATCH /api/tickets/:id/close

PATCH /api/tickets/:id/reopen

Comments

POST /api/comments/:ticketId

GET /api/comments/:ticketId

History

GET /api/history/:ticketId

Dashboard

GET /api/dashboard

Swagger

GET /api-docs

Example Ticket JSON
{
  "title": "Database connection issue",
  "description": "The database is offline and the support team is checking the server",
  "category": "infrastructure",
  "impact": "high"
}
Example Dashboard Response
{
  "openTickets": 1,
  "resolvedTickets": 0,
  "criticalTickets": 0,
  "ticketsByCategory": [
    {
      "total": 1,
      "category": "integration"
    },
    {
      "total": 1,
      "category": "infrastructure"
    }
  ]
}
Future Improvements

Role-based access control with more permission levels

Better validation for request body data

Pagination for tickets and comments

Search and filter endpoints

Automated tests

Deployment

Better API response standardization

About Me

My name is Thiago Machado Freire and I am a Computer Science student focused on Backend Development.

I am currently building projects to improve my skills and prepare for internship or junior opportunities in technology.

Technologies and interests

Node.js

JavaScript

MongoDB

REST APIs

Git and GitHub

Java

Python

Cloud Computing

Artificial Intelligence

Certification

Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate

GitHub

https://github.com/ThiagoMF1
