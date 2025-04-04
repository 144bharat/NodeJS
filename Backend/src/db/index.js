//This separate file is useful to remove and handle the database related logic separately without exposing in the index.js.
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