const express = require('express');
const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server);

server.listen(process.env.PORT || 3000);

console.log('Rodando na porta 3000');