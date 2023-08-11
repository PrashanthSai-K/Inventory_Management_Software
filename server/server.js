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
        res.send("Manufactured Created Successfully");
    })
})

app.post("/supplieradd", (req,res)=>{

    const name = req.body.name;
    const address = req.body.address;
    const contact = req.body.contact;
    conn.query("INSERT INTO supplier (name,address,contact) VALUES (?,?,?)",[name,address,contact],(error,result)=>{
        if(error) console.log(error)
        res.send("Supplier Created Successfully");
    })
})

app.post("/itemadd", (req,res)=>{
    const itemType = req.body.itemType;
    const manufacturerId = req.body.manufacturerName;
    const supplierId = req.body.supplierName;
    const itemName = req.body.itemName;
    const subName = req.body.subName;
    const Spec1 = req.body.Spec1;
    const Spec2 = req.body.Spec2;
    const Spec3 = req.body.Spec3;
    const cost = req.body.cost;
    const unit = req.body.units;
    console.log(unit)
    conn.query(`INSERT INTO itemtable 
                (item_type, item_name, item_subname, item_spec1,item_spec2, item_spec3, cost_per_item, quantity_units, manufacturer_id, supplier_id) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [itemType,itemName,subName, Spec1,Spec2, Spec3, cost, unit, manufacturerId, supplierId],
                (error, result)=>{
                    if(error)console.log(error);
                    else res.send("Item added successfully");
                })
})

app.post("/stockadd", (req,res)=>{
    const item_code = req.body.itemcode;
    const manufacturerId = req.body.manufacturerId;
    const supplierId = req.body.supplierId;
    const stockQty = req.body.stock_qty;
    const inventoryValue = req.body.inventoryValue;
    const userId = req.body.userId;
    const currDate = new Date();

    conn.query(`INSERT INTO stocktable (item_code, manufacturer_id, supplier_id, stock_qty, inventory_value, user_id, created_at) 
                VALUES (?, ?, ?, ?, ?, ?, ?)`, [item_code, manufacturerId,supplierId, stockQty, inventoryValue, userId, currDate.toISOString().split("T")[0]],
                (error, result)=>{
                    if(error)console.log(error);
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

app.get("/getItems", (req, res)=>{
    conn.query("SELECT * FROM itemtable",(error,result)=>{
        if(error)console.log(error);
        else{
            res.send(result);
        }
    })
})

app.get("/getQuantityUnits", (req, res)=>{
    conn.query("SELECT * FROM quantity_units", (error, result)=>{
        if(error)console.log(error);
        else{
            res.send(result);
        }
    })
})

app.get("/getAdminStockData", (req,res)=>{
    conn.query("SELECT * FROM admin_stock_view", (error, result)=>{
        if(error)console.log(error);
        res.send(result)
    })
})


app.listen(4000, ()=>console.log("App listening on port 4000"));
