// //This file is used for running the backend server.
// import express from "express";
// import cookieParser from "cookie-parser"; //This cookie-parser is mainly used for storing and getting the cookie to the user's system. And this cookie can be read by our server only so too much beneficial for us.
// import cors from "cors";

// const app = express();

// const corsOption = {
//   origin: process.env.CORS_ORIGIN,
//   methods: ["GET", "POST", "PUT"],
//   credentials: true,
//   optionsSuccessStatus: 200,
// };
// //Configuration related to corspolicy issue.
// app.use(cors(corsOption));

// //Configuration related to the data we want to deal with. i) Like we can get using json from forms. ii) Like we can get data from url in case of search/filter. iii) Like we can save the files or data inside the server.
// app.use(express.json({ limit: "10kb" })); //Here when we will send the json to server(api) then we will accept upto 10kb json data only.
// app.use(express.urlencoded({ extended: true, limit: "10kb" })); //Here when we will send data through url(in case of search/filter usually) so sometimes url convert space separated search with + operator or sometimes %20 value so to get the correct data from url we are setting the configuration here. And extended:true means we are capable of getting the nested json data.
// app.use(express.static("public")); //When we are saving the data inside backend server in public method so we need to specify here.

// app.use(cookieParser());
// export { app };








import express from 'express';
import cors from 'cors';
import cookieparser from 'cookie-parser';
const app = express();

const corsOption={
  origin:process.env.CORS_ORIGIN,
  methods:["GET","POST","PUT"]
}

app.use(cors(corsOption));

app.use(express.json({limit:"10kb"}));
app.use(express.urlencoded({limit:"10kb", extended:true}));
app.use(express.static("public"));

app.use(cookieparser());

export default app;