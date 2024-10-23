import mongoose from 'mongoose';
import config from '../../config.js';

const connectDb = async () => {

    try {
        await mongoose.connect(config.MONGO_URI);
        console.log('connected to mongoDb');

    } catch (error) {
        console.log(error.message)
    }

}

export default connectDb;