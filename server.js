import express from "express";
import mongoose from 'mongoose'; 
const connectDB =require('./backend/database/connection.js');
import User from './backend/models/user-model.js';
import router from "./backend/routes/user-routes.js";
import bookingRouter from "./backend/routes/booking-routes.js";
import bodyParser from "body-parser";
import pkg from 'body-parser';
const { json, urlencoded } = pkg
import cors from 'cors';
import { config } from "dotenv";



//core middlewares
const app = express();

app.use(express.json())
app.use(urlencoded({extended:true}))
app.use(cors)

//configure env file
config({path:".env"})

app.get('/', (req,res) => {
    res.json({message: "Hey there! Welcome to this API Service!"});
})


const PORT = process.env.PORT || 4000;
export function  start() {
    app.listen(PORT,()=>{
        console.log(`Server Listening on port ${PORT} `)
    })
}
mongoose.connect(process.env.DATABASE_URL). then(() => app.listen(PORT)).then(() => console.log('Connected to database '))
.catch(err =>console.log("Could Not Connect To The Database"))

app.use('/user', router)
app.use('/booking', bookingRouter)