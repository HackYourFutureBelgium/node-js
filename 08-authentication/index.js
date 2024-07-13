import express from 'express';
import jwt from 'jsonwebtoken';
import { expressjwt } from 'express-jwt';
import bodyParser from 'body-parser';

const registeredUsers = [{ username: 'user1', password: 'password1' }];

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Secret key for JWT signing and verification
const secretKey = 'your-secret-key';

// JWT middleware for verifying tokens
app.use(
    expressjwt({ secret: secretKey, algorithms: ['HS256'] }).unless({
        path: ['/login', '/register']
    })
);

app.post('/login', (req, res) => {
    // Check user credentials (username and password)
    // If credentials are valid, issue a JWT
    const { username, password } = req.body;

    console.log(req.body);

    if (
        registeredUsers.find(
            (user) => user.username === username && user.password === password
        )
    ) {
        const token = jwt.sign({ user: req.body.username }, secretKey);
        res.json({ token });
        return;
    }

    // throw new Error('Incorrect username or password');

    res.json({ error: 'Incorrect username or password' });
    return;
});

app.get('/secure-data', (req, res) => {
    res.json({ message: 'This is a protected route!' });
});

app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({ error: 'Invalid token' });
    }
});

app.listen(5000, () => {
    console.log(`Server is up and running at port : 5000`);
});
