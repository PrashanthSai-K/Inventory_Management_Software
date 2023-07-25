const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.get("/",(req,res)=>{
    res.send("Hello from backend")
})


app.listen(4000, ()=>console.log("App listening on port 4000"));

