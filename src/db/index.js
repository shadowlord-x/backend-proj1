import mongoose from "mongoose";
import {DB_name} from '../constants.js';

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`)
    console.log(`\n MONGODB connected !! DB HOST: ${connectionInstance,connection.host}`); // This is done if we connect on some other server instead of production
  } catch (error) {
    console.error("MongoDB connection error", error);
    process.exit(1)
  }
}

export default connectDB