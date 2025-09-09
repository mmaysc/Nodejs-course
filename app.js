const http = require('http');

const express = require('express');

const app = express();

const server = http.createServer(app);
    //process.exit(); -> encerra o processo do servidor, saindo do event loop, quando 
    //o programa não tem mais trabalho a fazer. 

server.listen(3000);