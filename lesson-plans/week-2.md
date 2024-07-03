# Week 2

## MVC

- [MVC Architecture](../06-mvc/README.md)
- [Sessions and cookies](../07-sessions-and-cookies/README.md)

## Projects

- Recipes
- [Template](https://github.com/samirm00/express-mysql-template)

---

## Project Overview

The Recipes project allows users to manage recipes efficiently.
Users can `register`, `log in`, `log out` and view recipes.
However, `only authenticated users can add, update, or delete recipes`

## Features

### User Authentication

- **Registration**: Users can create a new account by providing necessary details such as email, and password.
- **Login**: Registered users can log in to the system using their credentials.
- **Logout**: Authenticated users can log out of the system.

### Recipe Management

- **View All Recipes**: Users can view a list of all available recipes.
- **View Single Recipe**: Users can view the details of a specific recipe by selecting it.
- **Add Recipe**: Authenticated users can add new recipes to the system.
- **Update Recipe**: Authenticated users can update the details of existing recipes.
- **Delete Recipe**: Authenticated users can delete recipes from the system.

## Technologies Used

- **Express.js**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- **MySQL2**: A MySQL client for Node.js with support for Promises and connection pooling, which offers a modern, optimized, and efficient way to interact with the MySQL database.
- **bcrypt**: Used for hashing user passwords before storing them in the database to ensure security.
- **JWT (JSON Web Tokens)**: Used for secure user authentication and session management.

## API Endpoints

### User 

- **POST /register**: Register a new user.
- **POST /login**: Authenticate a user and return a token.
- **POST /logout**: Log out the authenticated user.

### Recipe

- **GET /recipes**: Retrieve a list of all recipes.
- **GET /recipes/:id**: Retrieve a single recipe by its ID.
- **POST /recipes**: Add a new recipe (authenticated users only).
- **PUT /recipes/:id**: Update an existing recipe by its ID (authenticated users only).
- **DELETE /recipes/:id**: Delete a recipe by its ID (authenticated users only).

## Database Schema

### Users Table

- **id**: INT, Primary Key, Auto Increment
- **email**: VARCHAR(255), Unique
- **password**: VARCHAR(255)

### Recipes Table

- **id**: INT, Primary Key, Auto Increment
- **title**: VARCHAR(255)
- **ingredients**: TEXT
- **instructions**: TEXT
