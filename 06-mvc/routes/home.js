import express from 'express';

import homeControllers from '../controllers/home.js';

const router = express.Router();

// get books
router.get('/', homeControllers.getBooks);
router.get('/:id', homeControllers.getBook);

export default router;
