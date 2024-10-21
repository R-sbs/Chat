import {Server} from 'socket.io';
import { socketIoOrigin } from '../../config';

import http from 'node:http';

import express from 'express';

console.log(socketIoOrigin);

const app = express();

const server = new http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: [socketIoOrigin],
        methods: ["GET", "POST"]
    }
})

 const userSocketMap = {}; //{userId : socketId}

 export const getReceiverSocketId = (id) => {
    return userSocketMap[id];
 }

io.on("connection", (socket) => {
    console.log("A User is Connects", socket.id);


    const userId = socket.handshake.query.userId;

    if(userId !== "undefined") userSocketMap[userId] = socket.id;

    //io.emit is used to send events to all connected users
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    console.log(userSocketMap)

    //socket.on is event listener and can be used both on client and server
    socket.on("disconnect", () => {
        console.log("User disconnected", socket.id);

        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));


    })

})

export { app, io, server };
 


