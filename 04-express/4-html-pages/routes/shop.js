import express from 'express';

import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const PATH = dirname(__filename);

router.get('/', (req, res) => {
    res.sendFile(path.join(PATH, '..', 'views', 'shop.html'));
});
router.get('/products', (req, res) => {
    res.sendFile(path.join(PATH, '..', 'views', 'addProduct.html'));
});

router.get('/products/:id', (req, res) => {
    const id = req.params.id;
    res.send(`product with ID ${id}`);
});

router.post('/products', (req, res) => {
    const title = req.body.title;
    res.send(`<h1>Product created with the title ${title}</h1>`);
});

router.put('/products/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Product with ID ${id} updated`);
});

router.delete('/products/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Product with ID ${id} deleted`);
});

export default router;
