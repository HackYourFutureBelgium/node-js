# Week 3

## MVC

- [REST API](../09-rest-apis/README.md)
- [Extra](../10-extra/README.md)

## Projects

- Flights
- [Template](https://github.com/samirm00/express-mysql-template)

## Project Overview

The flights project allows users to manage flights efficiently.
Users can `register`, `log in`, `log out` and view flights.
However, `only authenticated users can add, update, or delete flights`

## Features

### User Authentication

- **Registration**: Users can create a new account by providing necessary details such as email, and password.
- **Login**: Registered users can log in to the system using their credentials.
- **Logout**: Authenticated users can log out of the system.

### flights Management

- **View All flights**: Users can view a list of all available flights.
- **View Single flight**: Users can view the details of a specific flight by selecting it.
- **Add flight**: Authenticated users can add a new flight to the system.
- **Update flight**: Authenticated users can update the details of existing flight.
- **Delete flight**: Authenticated users can delete flight from the system.

## Technologies Used

- **Express.js**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- **MySQL2**: A MySQL client for Node.js with support for Promises and connection pooling, which offers a modern, optimized, and efficient way to interact with the MySQL database.
- **bcrypt**: Used for hashing user passwords before storing them in the database to ensure security.
- **JWT (JSON Web Tokens)**: Used for secure user authentication and session management.

## API Endpoints

### User Authentication

- **POST /register**: Register a new user.
- **POST /login**: Authenticate a user and return a token.
- **POST /logout**: Log out the authenticated user.

### Recipe Management

- **GET /flights**: Retrieve a list of all flights.
- **GET /flights/:id**: Retrieve a single flight by its ID.
- **POST /flights**: Add a new flights (authenticated users only).
- **PUT /flights/:id**: Update an existing flights by its ID (authenticated users only).
- **DELETE /flights/:id**: Delete a flights by its ID (authenticated users only).

## Database Schema

### Users Table

- **id**: INT, Primary Key, Auto Increment
- **username**: VARCHAR(255), Unique
- **email**: VARCHAR(255), Unique
- **password**: VARCHAR(255)

### flights Table

- id: INT, Primary Key, Auto Increment
- flight_number: VARCHAR(255)
- departure_airport: VARCHAR(255)
- arrival_airport: VARCHAR(255)
- departure_time: DATETIME
- arrival_time: DATETIME
- status: ENUM('scheduled', 'departed', 'arrived', 'cancelled')
- created_at: TIMESTAMP
- updated_at: TIMESTAMP
