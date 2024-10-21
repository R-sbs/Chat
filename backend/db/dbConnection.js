import mongoose from 'mongoose';
import { DBString } from '../../config.js';

const connectDb = async () => {

    console.log(DBString);
    console.log(process.env.MONGO_DB_URI)

    try {
        await mongoose.connect(DBString);
        console.log('connected to mongoDb');

    } catch (error) {
        console.log(error.message)
    }

}

export default connectDb;