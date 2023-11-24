# Express

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It simplifies the process of writing server-side applications by providing a multitude of powerful tools and features. With Express, you can quickly build robust applications using JavaScript.

### Middleware

Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application's request-response cycle. They are used to execute any code, make changes to the request and the response objects, end the request-response cycle, or call the next middleware function in the stack.

Here's how you can use a middleware:

```Js
app.use((req, res, next)  => {
  console.log('Time:', Date.now());
  next();
});
```

### working with request and response

Express provides methods to interact with both the request and response objects.

#### Request Object

The request object (req) represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and more.

Example of accessing request body:

```Js
app.post('/login',  (req, res) => {
const username = req.body.username;
// ...
});
```

#### Response Object

The response object (res) is used to send the HTTP response to the client. It has methods to send HTTP status, JSON, HTML, etc.

Example of sending a response:

```Js
res.send('Hello World!');

```

### routing

Routing is the process of defining how an application responds to a client request for a specific endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, etc.).

Here's an example of defining a simple route:

```Js
app.get('/',  (req, res) => {
  res.send('Welcome to the homepage!');
});

```

### return HTML pages

Express can be used to render HTML pages by setting up a view engine. You can use various template engines like EJS, Pug, Handlebars, etc.

Example using EJS:

```Js
app.set('view engine', 'ejs');

app.get('/about',  (req, res) => {
  res.render('about');
});

```

### Conclusion

Express is a powerful framework for building web applications on top of Node.js. With its easy-to-use routing, middleware support, and ability to return HTML pages, it's a robust solution for developers looking to create scalable and efficient web applications.

For more detailed information and examples, visit the official Express documentation [CLICK HERE](https://expressjs.com/)
