import express from 'express';
import authRoutes from './routes/authRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import userRoutes from './routes/userRoutes.js'
import cookieParser from 'cookie-parser';
import { PORT } from '../config.js';
import connectDb from './db/dbConnection.js';
import cors from 'cors';
import {app, server} from './socket/socket.js';
import path from 'node:path';


const __dirname = path.resolve();


// Use CORS middleware to allow requests from frontend
app.use(cors(
    {
        origin: 'http://localhost:5173', // Frontend's URL (React running on Vite)
        credentials: true, // Allow credentials (cookies, authorization headers)
      }
));

// json body parser
app.use(express.json())
//cookie parser
app.use(cookieParser());

//middlewares to direct requests to respective routes.
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes );


//serving static files
app.use(express.static(path.join(__dirname, '/frontend/dist')));

//catch all routes other than above routes
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
})

//initialising server to listen on port
server.listen(PORT, () => {
    connectDb()
    console.log(`Server is listening on port ${PORT}...`);
})
