const express = require("express");
const { json, urlencoded }  = require('body-parser');
const cors = require('cors');


//core middlewares
const app = express();

app.use(json())
app.use(urlencoded({extended:true}))
app.use(cors)




const PORT = process.env.PORT || 4000;
 exports.start = () => {
 app.listen(PORT,()=>{
 console.log(`Server Listening to port ${PORT} rn`)
 })
}