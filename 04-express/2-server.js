import express from 'express';
import bodyParser from 'body-parser';

// initialize express
const app = express();

// parse req body, express doesn't parse the body, that is why we need to use bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// middleware
app.use((req, res, next) => {
    console.log('Hello form the middleware ');
    next(); // allows the req to continue
});

// routes
app.get('/', (req, res) => {
    res.send('<h1>Hello from express</h1>');
});

/*
There are three different methods by which data can be sent along with the request:

1. Body: The request body is a part of the HTTP request, where data is stored
in a structured format. It is commonly used to send data to the server in a POST request.
This method is suitable for sending large amounts of data.

2. Params: Parameters (or params) are embedded in the URL path itself,
often used to identify a specific resource or a set of resources within
the API's resource collection. Params are typically used to provide 
essential information that the route needs.

3. Query: Query parameters are added to the URL after a question mark ('?').
They are key-value pairs and are typically used to send data that does not 
pertain to the resource identity. Query parameters allow for the customization
of the response based on specific input values.

Below is an example of how each of these methods is accessed within the route.
*/

app.post('/:name', (req, res) => {
    const name = req.body.name; // Accessing data sent in the request body
    console.log('Body:', req.body); // Logging the entire request body

    console.log('Params:', req.params); // Logging parameters embedded in the URL path

    console.log('Query:', req.query); // Logging query parameters in the URL

    res.send(`<h1>Hello ${name}!</h1>`);
});

const PORT = 3000;
// listen
app.listen(PORT, () => {
    console.log(`Server is up and running at port : ${PORT}`);
});
