import dotenv from 'dotenv'
dotenv.config()
import express from "express";
const app = express();

app.get('/',(req,res) => {
    res.send("my data");
})

app.listen(process.env.PORT,()=>{
    console.log(`application is running at port ${process.env.PORT}`);
})