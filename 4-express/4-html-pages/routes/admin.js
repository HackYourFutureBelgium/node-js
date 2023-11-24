import express from 'express';

const router = express.Router();

// check if the user is Admin
const checkAdmin = (req, res, next) => {
    const user = req.body.user;
    const isAdmin = req.body.isAdmin;
    if (user && isAdmin) {
        next();
    } else {
        res.status(403).send('Access denied');
    }
};

router.use('/', checkAdmin, (req, res, next) => {
    console.log('Welcome to the admin area');
    next();
});

export default router;
