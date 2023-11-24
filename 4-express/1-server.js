import express from 'express';

// initialize express
const app = express();

// middleware
app.use((req, res, next) => {
    console.log('Hello form the middleware ');
    next(); // allows the req to continue
});

// routes
app.get('/', (req, res) => {
    res.send('<h1>Hello from express</h1>');
});

const PORT = 3000;
// listen
app.listen(PORT, () => {
    console.log(`Server is up and running at port : ${PORT}`);
});

// https://expressjs.com/en/5x/api.html#app.use
