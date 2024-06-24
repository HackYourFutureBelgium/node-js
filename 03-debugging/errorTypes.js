/*

Error types in Node.js
======================

Syntax errors
============

In general they are easy to fix, your VsCode will help you to identify these errors,
and when your run your code you see an error in VsCode console immediately, which is 
sometimes not that helpful.
*/

const firstName = 'John';
console.log(lastName); // lastName is not defined

// Runtime errors
// ==============

import http from 'http';

const PORT1 = 3000;

const server1 = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.codeStatus = 200;
        res.write(`
    <html>
        <head></head>
        <body>
            <h1>Welcome to main page</h1>
        </body>
    </html>
    `);

        res.end();
        // because there is no return the code will continue executing, causing a runtime error
        // Cannot set headers after they are sent to the client.
    }
    res.setHeader('Content-Type', 'text/html');
    res.codeStatus = 200;
    res.write(`
    <html>
        <head></head>
        <body>
            <h1>Welcome to about page</h1>
        </body>
    </html>
    `);
    res.end();
});

server1.listen(PORT1, () => {
    console.log(`Server is up and running at port : ${PORT1}`);
});

/* 
Logical errors
=============

the most difficult to fix as they throw no errors, we can use VsCode debugger to go throw our
code and find the logical errors.
*/

const PORT2 = 3005;
const server2 = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/about') {
        // the '/about' value is not correct as it should be `/`
        res.setHeader('Content-Type', 'text/html');
        res.codeStatus = 200;
        res.write(`
    <html>
        <head></head>
        <body>
            <h1>Welcome to main page</h1>
        </body>
    </html>
    `);

        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.codeStatus = 200;
    res.write(`
    <html>
        <head></head>
        <body>
            <h1>Welcome to about page</h1>
        </body>
    </html>
    `);
    return res.end();
});

server2.listen(PORT2, () => {
    console.log(`Server is up and running at port : ${PORT2}`);
});
