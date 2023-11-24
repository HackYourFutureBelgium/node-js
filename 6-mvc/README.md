# Node.js MVC Architecture with ES6

## Introduction

This README provides a comprehensive guide on implementing the Model-View-Controller (MVC)
architectural pattern in a Node.js application using ES6 `import` and `export`. MVC is
a widely adopted design pattern that helps in structuring your codebase, making it more
organized, maintainable, and scalable.

## Table of Contents

1. [What is MVC?](#what-is-mvc)
2. [Getting Started](#getting-started)
   - [Project Structure](#project-structure)
3. [Model](#model)
4. [View](#view)
5. [Controller](#controller)
6. [Routing](#routing)
7. [Middleware](#middleware)
8. [Database Integration](#database-integration)
9. [Example Application](#example-application)
10. [Testing](#testing)
11. [Conclusion](#conclusion)

## What is MVC?

MVC stands for Model-View-Controller. It's a software architectural pattern that separates
an application into three interconnected components:

- **Model**: Represents the data and business logic of the application. It interacts with
  the database or any other data source.

- **View**: Represents the presentation layer of the application. It displays data to the
  user and handles user input.

- **Controller**: Acts as an intermediary between the Model and View. It receives
  user input, processes it, interacts with the Model to fetch or update data, and
  updates the View accordingly.

## Getting Started

### Project Structure

To implement MVC in a Node.js application with ES6, start with a well-organized project structure:

```

my-mvc-app/
├── app.js
├── controllers/
│ ├── userController.js
│ └── ...
├── models/
│ ├── userModel.js
│ └── ...
├── views/
│ ├── userView.js
│ └── ...
├── routes/
│ ├── index.js
│ ├── userRoutes.js
│ └── ...
├── middleware/
│ ├── authMiddleware.js
│ └── ...
├── config/
│ ├── database.js
│ └── ...
├── public/
│ ├── css/
│ ├── js/
│ └── ...
├── tests/
│ ├── userController.test.js
│ └── ...
└── README.md

```

In this structure:

- `controllers` handle user input and interact with the Model.
- `models` define data structures and interact with the database.
- `views` are responsible for rendering HTML or other user interfaces.
- `routes` define the application's URL routes and map them to controllers.
- `middleware` includes any custom middleware functions.
- `config` stores configuration files.
- `public` contains static assets like CSS and JavaScript.
- `tests` include unit and integration tests.

## Model

The Model represents your data and business logic. Create models for each entity in your application.
For example, if you have a User entity, define a UserModel.

```javascript
// models/userModel.js

class UserModel {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  // Add methods for database interactions here
}

export default UserModel;
```

## View

Views handle the presentation layer. They are responsible for rendering HTML or other user interfaces.
You can use templating engines like EJS or Pug for this purpose.

```javascript
// views/userView.js

import ejs from 'ejs';

function renderUserPage(user) {
  const html = ejs.render(
    `
    <html>
      <body>
        <h1>Welcome, <%= user.name %></h1>
        <p>Email: <%= user.email %></p>
      </body>
    </html>
  `,
    { user }
  );

  return html;
}

export { renderUserPage };
```

## Controller

Controllers handle user input and interact with the Model and View. Create controllers for each route or entity.

```javascript
// controllers/userController.js

import UserModel from '../models/userModel';
import { renderUserPage } from '../views/userView';

function getUserDetails(req, res) {
  // Fetch user details from the Model
  const user = new UserModel(1, 'John Doe', 'john@example.com');

  // Render the user details using the View
  const html = renderUserPage(user);

  // Send the HTML response to the client
  res.send(html);
}

export { getUserDetails };
```

## Routing

Define routes that map URLs to controllers. Use a routing library like Express.js.

```javascript
// routes/userRoutes.js

import express from 'express';
import { getUserDetails } from '../controllers/userController';

const router = express.Router();

router.get('/user/:id', getUserDetails);

export default router;
```

## Middleware

Middleware functions can be used to add custom logic to the request/response cycle. For example, you can implement authentication middleware.

```javascript
// middleware/authMiddleware.js

function authenticate(req, res, next) {
  // Implement authentication logic here
  const isAuthenticated = /* Check if the user is authenticated */;

  if (isAuthenticated) {
    next(); // Continue to the next middleware or route handler
  } else {
    res.status(401).send('Unauthorized');
  }
}

export { authenticate };
```

## Database Integration

To interact with a database, you can use libraries like Mongoose for MongoDB or Sequelize
for SQL databases. Configure your database connection in the `config/database.js` file.

## Example Application

For a complete example of an MVC application in Node.js with ES6 modules, refer to the included
`example-app` folder in this repository.

## Testing

Testing is crucial for maintaining the quality of your application. Write unit tests for controllers,
models, and any custom middleware. Use testing frameworks like Mocha and assertion libraries like Chai.

## Conclusion

Implementing the MVC pattern in your Node.js application with ES6 modules can lead to a more
organized and maintainable codebase. It separates concerns, making it easier to develop, test,
and scale your application. This README serves as a guide to get you started, but remember that
the specifics of your project may require adjustments to this structure. Happy coding!
