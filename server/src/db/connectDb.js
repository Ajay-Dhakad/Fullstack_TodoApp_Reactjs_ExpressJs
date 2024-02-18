import mongoose from 'mongoose';

const dbConnection = async () =>{
    await mongoose.connect(process.env.DB_URI)
    console.log('connected to mongoDB')
}

export default dbConnection;