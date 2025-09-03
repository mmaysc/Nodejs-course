const http = require('http');

const routes = require('./routes');

const server = http.createServer(routes.handler);
    //process.exit(); -> encerra o processo do servidor, saindo do event loop, quando 
    //o programa não tem mais trabalho a fazer. 

server.listen(3000);