import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// get the current module's directory path
const __filename = fileURLToPath(import.meta.url);
const PATH = dirname(__filename);

const requestHandler = (req, res) => {
    // get the url and method from the req
    const { url, method } = req;
    // if the url is the root route
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(
            `<html>
                <head></head>
                <body>
                    <form action="/message" method="POST">
                        <input name='message' type="text">
                        <button type="submit">Send</button>
                    </form>
                </body>
            </html>`
        );
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];
        // add event data to req
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        // add event end to req
        req.on('end', () => {
            try {
                const parsedBody = Buffer.concat(body).toString();
                // the parsedBody will be like that message=hello
                const message = parsedBody.split('=')[1];
                if (!message) {
                    res.statusCode = 400;
                    res.setHeader('Content-Type', 'text/plain');
                    return res.end('Bad Request: Message is missing');
                } else {
                    fs.writeFile(
                        path.join(PATH, 'message.txt'),
                        message,
                        (err) => {
                            if (err) {
                                throw err;
                            } else {
                                // redirect to
                                res.statusCode = 302;
                                res.setHeader('Location', '/');
                                return res.end();
                            }
                        }
                    );
                }
            } catch (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Internal Server Error');
            }
        });

        req.on('error', (error) => {
            console.error(error);
        });
    }
};

export default requestHandler;
