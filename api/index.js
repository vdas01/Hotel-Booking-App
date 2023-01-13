// const express = require("express")

import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import authRoute from './routes/auth.js';
import usersRoute from './routes/users.js';
import hotelsRoute from './routes/hotels.js';
import roomsRoute from './routes/rooms.js';
const app = express();
const port = 8000;
dotenv.config();
mongoose.set('strictQuery', true); //for deprection warning

const connect = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB");
    } catch(error){
        console.log(error);
    }
}

mongoose.connection.on("disconnected",()=>{
    console.log("mongoDb disconnected");
})
mongoose.connection.on("connected",()=>{
    console.log("mongoDb connected");
})

app.get("/",(req,res)=>{
    res.send("Hello world");
})



//middlewarre
//to send json data
app.use(express.json());

app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/hotels",hotelsRoute);
app.use("/api/rooms",roomsRoute);

// app.use((req,res,next)=>{
//     res.send("Hii i am a middleware from index.js");
//     next();
// })

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
   return res.status(errorStatus).json({
    success:false,
    status:errorMessage,
    message:errorMessage,
    stack:err.stack
   });
   
})



app.listen(port,()=>{
    connect();
    console.log(`Listening to ${port}`);
})
