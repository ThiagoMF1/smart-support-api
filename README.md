# Smart Support API

![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![Express](https://img.shields.io/badge/Express.js-REST%20API-black)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)
![JWT](https://img.shields.io/badge/JWT-Auth-orange)
![Status](https://img.shields.io/badge/Status-In%20Progress-blue)
![Focus](https://img.shields.io/badge/Focus-Backend-blueviolet)

A backend project created to simulate a support ticket system with authentication, ticket management, and business rules.

---

## About this project

I created this project to practice backend development with something that feels more like a real system and less like a basic CRUD from tutorials.

The idea is to build an API where users can create support tickets, track updates, manage ticket status, and organize technical issues in a structured way.

I wanted to work on something that could help me improve my skills with Node.js, Express, MongoDB, REST APIs, authentication, and backend organization.

---

## Goals

- Practice backend development with a more realistic project
- Build a REST API with a clean folder structure
- Work with authentication and protected routes
- Create ticket, comment, and history models
- Practice business rules and data relationships
- Build a project for my portfolio as a backend student

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

---

## Project Structure

```bash
src/
  config/
  controllers/
  middleware/
  models/
  routes/
  app.js
  server.js
Current Progress

Initial project structure created

Express server configured

MongoDB connection working

Base models created

Project published on GitHub

Planned Features
Authentication

User registration

User login

Password hashing

JWT authentication

Protected routes

Tickets

Create ticket

List tickets

Get ticket by id

Update ticket

Close ticket

Reopen ticket

Business Rules

Automatic priority logic

Category validation

Status flow

User permissions

Comments and History

Add comments to tickets

Store ticket update history

Track important changes

Dashboard

Count open tickets

Count resolved tickets

Count critical tickets

Group tickets by category

Entities
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

I wanted to build something a little different, with a scenario that feels more real and with more business logic involved. A support ticket system looked like a good choice because it allows me to practice authentication, relationships between models, status flow, and other backend concepts in the same project.

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
First Endpoint

Base route:

GET /

Example response:

{
  "message": "Smart Support API running"
}
Future Improvements

Role-based access control

Better validation

Advanced ticket filtering

API documentation with Swagger

Automated tests

Deployment

Pagination

Search by category and status

Analytics endpoints

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
