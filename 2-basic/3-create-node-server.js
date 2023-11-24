import http from 'http';

import requestHandler from './routes.js';

// port
const PORT = 3000;

// create a server
const server = http.createServer(requestHandler);

// start the server listening on the specified port
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
});
