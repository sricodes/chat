/* console.log(`${__dirname}/../public`)

const path = require('path');
console.log(path.join(__dirname, '/../public')) // removes un - necessary steps

 */

const path = require("path");
const http = require("http");
const express = require("express");
const socketIO = require("socket.io");
const { generateMessage } = require('./utils/message')

const app = express();
const server = http.createServer(app) // our own server , so we can integrate socket io
const io = socketIO(server)

const publicFolder = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;


io.on('connection', (socket) => {
    console.log(`New User just connected`)

    socket.on('disconnect', () => {
        console.log(`User was disconnected !!`);
    });

    socket.broadcast.emit('userJoined', generateMessage("Admin", "A new user has joined"))
    socket.emit('welcome', generateMessage("Admin", "Welcome to the Chat"), function (msg) { console.log(`Got it !! ${msg}`) })

})



app.use(express.static(publicFolder));

server.listen(port, () => {
    console.log(`Application started !! PORT ${port}`);
});
