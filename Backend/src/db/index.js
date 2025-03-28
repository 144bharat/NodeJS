//This file is for creating database connection.
import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n Mongo Db connected successfully. Response: ${connectionInstance.connection.host}`);
        
    }catch(error){
        console.log("MONGODB connection failed. ",error);
        process.exit(1);        
    }
}
export default connectDB