import express from 'express';
import shopRoutes from './routes/shop.js';

// initialize express
const app = express();

// use routers
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
