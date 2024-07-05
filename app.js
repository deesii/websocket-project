const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const app = express(); 
const server = http.createServer(app); 
app.use(express.static('public'));
const io = socketIO(server);

// Event listener for socket.io connections

io.on('connection', socket => {
    console.log('There is now a connection');

    // listens out for newMessage event, it will send the data to the client
    socket.on('newMessage', data => {
        io.emit('dispenseMessage', data);
        const { sender , message } = data;
        console.log(`${sender}: ${message}`);
    });

    socket.on('disconnect', () => {
        console.log('a user has disconnected')
    });
});

app.get('/', (req, res) => {
    // Send the HTML file as the response
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// start server and listening on port 3000 
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});