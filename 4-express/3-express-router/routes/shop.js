import express from 'express';

const router = express.Router();

router.get('/products', (req, res) => {
    res.send('List of products');
});

router.get('/products/:id', (req, res) => {
    const id = req.params.id;
    res.send(`product with ID ${id}`);
});

router.post('/products', (req, res) => {
    res.send('Product created');
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
