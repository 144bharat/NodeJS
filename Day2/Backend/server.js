import dotenv from 'dotenv'
dotenv.config()
import express from "express";
const app = express();

const jokes = [
    {
        id: 1,
        title: 'Joke 1',
        content: 'this is Joke 1'
    },
    {
        id: 2,
        title: 'Joke 2',
        content: 'this is Joke 2'
    },
    {
        id: 3,
        title: 'Joke 3',
        content: 'this is Joke 3'
    },
    {
        id: 4,
        title: 'Joke 4',
        content: 'this is Joke 4'
    },
    {
        id: 5,
        title: 'Joke 5',
        content: 'this is Joke 5'
    },
    {
        id: 6,
        title: 'Joke 6',
        content: 'this is Joke 6'
    },
    {
        id: 7,
        title: 'Joke 7',
        content: 'this is Joke 7'
    },
    {
        id: 8,
        title: 'Joke 8',
        content: 'this is Joke 8'
    },
    {
        id: 9,
        title: 'Joke 9',
        content: 'this is Joke 9'
    },
    {
        id: 10,
        title: 'Joke 10',
        content: 'this is Joke 10'
    }
]
app.get('/baseApi/jokes',(req,res) => {
    res.json(jokes);
})

app.listen(process.env.PORT,()=>{
    console.log(`application is running at port ${process.env.PORT}`);
})