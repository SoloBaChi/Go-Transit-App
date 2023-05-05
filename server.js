import express from "express";
import mongoose from 'mongoose'; 
import router from "./backend/routes/user-routes.js";
import bookingRouter from "./backend/routes/booking-routes.js";
import bodyParser from "body-parser";
import pkg from 'body-parser';
const { json, urlencoded } = pkg
import cors from 'cors';
import { config } from "dotenv";



//core middlewares
const app = express();

app.use(json())
app.use(urlencoded({extended:true}))
app.use(cors)

//configure env file
config({path:".env"})




const PORT = process.env.PORT || 4000;
 export function  start() {
 app.listen(PORT,()=>{
 console.log(`Server Listening to port ${PORT} rn`)
 })
}


app.use('/user', router)
app.use('/booking', bookingRouter)