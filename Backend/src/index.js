//This file is used for database connection using mongoose.
import dotenv from "dotenv";
import connectDB from './db/index.js';
import express from 'express';
const app = express();
dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
app.listen(process.env.PORT || 8000, ()=>{
    console.log(` Server is running at port: ${process.env.PORT}`);
    
})
})
.catch((error)=>{
    console.log("MongoDB connection failed!. ",error);
    
})


// import express from "express";
// const app = express();
// (
//     async ()=>{
//         try{
//             await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//             app.on("error",(error)=>{
//                 console.log("ERROR: Not able to run express js but database connected.",error);
//                 throw error;
//             })
//             app.listen(process.env.PORT,()=>{
//                 console.log(`App is listening on port${process.env.PORT}`)
//             })
//         }catch(error){
//             console.error("ERROR: ",error);
//             throw error;
//         }
//     }
// )()