const http = require('http');

const routes = require('../Tarefa-1/task1-routes');

const server = http.createServer(routes.handler);

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify({
//         data: 'Hello World!',
//     }));
// });

server.listen(3000);