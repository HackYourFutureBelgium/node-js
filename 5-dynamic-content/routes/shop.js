import express from 'express';

import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const PATH = dirname(__filename);

// save products
const products = [];

// get products
router.get('/products', (req, res) => {
    res.render('addProduct', { title: 'Add Product', path: '/addProduct' });
});

// get product by id
router.get('/products/:id', (req, res) => {
    const id = req.params.id;
    res.send(`product with ID ${id}`);
});

// add a new product
router.post('/products', (req, res) => {
    const title = req.body.title;
    products.push({
        id: products.length + 1,
        title: title
    });
    res.status(302).redirect('/');
});

// update a product
router.put('/products/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Product with ID ${id} updated`);
});

// delete a product
router.delete('/products/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Product with ID ${id} deleted`);
});

export default {
    router: router,
    products: products
};
