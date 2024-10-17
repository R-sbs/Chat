import mongoose from 'mongoose';

const connectDb = async () => {

    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log('connected to mongoDb');

    } catch (error) {
        console.log(error.message)
    }

}

export default connectDb;