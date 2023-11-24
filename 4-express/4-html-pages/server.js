import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import express from 'express';
import bodyParser from 'body-parser';

const __filename = fileURLToPath(import.meta.url);
const PATH = dirname(__filename);

import shopRoutes from './routes/shop.js';

// initialize express
const app = express();

// parse body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// serve static folder
app.use(express.static(path.join(PATH, 'public')));

// use routers
app.use('/shop', shopRoutes);

// handle 404
app.use((req, res) => {
    res.status(404).sendFile(path.join(PATH, 'views', 'pageNotFound.html'));
});

const PORT = 3000;
// listen
app.listen(PORT, () => {
    console.log(`Server is up and running at port : ${PORT}`);
});
