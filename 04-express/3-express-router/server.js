import express from 'express';
import bodyParser from 'body-parser';

import adminRoutes from './routes/admin.js';
import shopRoutes from './routes/shop.js';

// initialize express
const app = express();

// parse body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use routers
app.use(adminRoutes);
app.use(shopRoutes);

// handle 404
app.use((req, res) => {
    res.status(404).send('<h1>page not found</h1>');
});

const PORT = 3000;
// listen
app.listen(PORT, () => {
    console.log(`Server is up and running at port : ${PORT}`);
});
