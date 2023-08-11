const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql"); 
const dotenv = require('dotenv').config();


const app = express();
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const conn = mysql.createConnection({
    host:process.env.DB_HOST_PUBLIC,
    user:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    port:process.env.DB_PORT_PUBLIC
})


conn.connect(()=>{
    console.log("Connected to DB sucessfully")
})

app.get("/",(req,res)=>{
    res.send("Hello from backend")
})

app.post("/manufactureradd", (req,res)=>{
    const name = req.body.name
    conn.query("INSERT INTO manufacturer (name) VALUES (?)",[name],(error,result)=>{
        if(error) console.log(error)
    })
})

app.post("/supplieradd", (req,res)=>{

    const name = req.body.name;
    const address = req.body.address;
    const contact = req.body.contact;
    conn.query("INSERT INTO supplier (name,address,contact) VALUES (?,?,?)",[name,address,contact],(error,result)=>{
        if(error) console.log(error)
        else console.log(result);
        
    })
})

app.get("/getManufacturer", (req, res)=>{
    conn.query("SELECT * FROM manufacturer", (error, result)=>{
        res.send(result);
    })
})

app.get("/getSupplier", (req, res)=>{
    conn.query("SELECT * FROM supplier", (error, result)=>{
        res.send(result);
    })
})


app.listen(4000, ()=>console.log("App listening on port 4000"));
