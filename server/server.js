/* console.log(`${__dirname}/../public`)

const path = require('path');
console.log(path.join(__dirname, '/../public')) // removes un - necessary steps

 */

const path = require("path");
const http = require("http");
const express = require("express");
const socketIO = require("socket.io");

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
})



app.use(express.static(publicFolder));

server.listen(port, () => {
    console.log(`Application started !! PORT ${port}`);
});
