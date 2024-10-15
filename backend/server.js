import express from 'express';
import authRoutes from './routes/authRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import userRoutes from './routes/userRoutes.js'
import cookieParser from 'cookie-parser';
import { PORT } from '../config.js';
import connectDb from './db/dbConnection.js';

const app = express();

// app.get('/', (req, res) => {
//     res.send("Hello from Server");
// })


// json body parser
app.use(express.json())
//cookie parser
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes );

app.listen(PORT, () => {
    connectDb()
    console.log(`Server is listening on port ${PORT}...`);
})
