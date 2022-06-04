const express = require('express');
const { Socket } = require('socket.io');

const app = express();

const server = require('http').createServer(app);

const io = require('socket.io')(server, {
    cors: {origin: "*"}
});

io.on('connection', (socket) => {
    console.log('connection');

    socket.on('sendMessageoServer');
    
    socket.on('disconnect', (socket) => {
        console.log('Disconnected');
    });
});

server.listen(3000, () => {
    console.log('Server is running');
});