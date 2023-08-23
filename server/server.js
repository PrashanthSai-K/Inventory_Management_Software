const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const dotenv = require("dotenv").config();
const {
  verifyToken,
  createSession,
  getUser,
} = require("./auth/loginMiddleware.js");
const cookieParser = require("cookie-parser");
const db = require("./database/db.js");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.cookie("heelo", "hai");
  res.send("Hello from backend");
});

app.post("/loginUser", verifyToken, createSession, (req, res) => {
  const token = res.locals.token;
  res.send(token);
});

app.post("/getUser", getUser);

app.post("/manufactureradd", (req, res) => {
  const name = req.body.name;
  db.query(
    "INSERT INTO manufacturer (name) VALUES (?)",
    [name],
    (error, result) => {
      if (error) console.log(error);
      res.send("Manufactured Created Successfully");
    }
  );
});

app.post("/supplieradd", (req, res) => {
  const name = req.body.name;
  const address = req.body.address;
  const contact = req.body.contact;
  db.query(
    "INSERT INTO supplier (name,address,contact) VALUES (?,?,?)",
    [name, address, contact],
    (error, result) => {
      if (error) console.log(error);
      res.send("Supplier Created Successfully");
    }
  );
});

app.post("/itemEdit", (req, res) => {
  const item_type = req.body.item_type;
  const item_name = req.body.item_name;
  const item_subname = req.body.item_subname;
  const item_spec1 = req.body.item_spec1;
  const item_spec2 = req.body.item_spec2;
  const item_spec3 = req.body.item_spec3;
  const manufacturer_id = req.body.manufacturer_id;
  const quantity_units = req.body.quantity_units;
  const supplier_id = req.body.supplier_id;
  const cost_per_item = req.body.cost_per_item;
  const item_code = req.body.item_code;

  db.query(
    `UPDATE itemtable 
      SET item_type = ?, 
          item_name = ?, 
          item_subname = ?, 
          item_spec1 = ?, 
          item_spec2 = ?, 
          item_spec3 = ?, 
          cost_per_item = ?, 
          quantity_units = ?, 
          manufacturer_id = ?, 
          supplier_id = ?
      WHERE item_code = ?`,
    [
      item_type,
      item_name,
      item_subname,
      item_spec1,
      item_spec2,
      item_spec3,
      cost_per_item,
      quantity_units,
      manufacturer_id,
      supplier_id,
      item_code,
    ]
  )
    .then(() => res.status(200).json({ message: "Error updating item." }))
    .catch((error) => console.log(error));
  // (error, result) => {
  //   if (error) {
  //     console.log(error);
  //     res.status(500).send("Error updating item.");
  //   } else {
  //     res.send("Edited Successfully");
  //   }
  // }
});

app.post("/stockEdit", (req, res) => {
  const manufacturer_id = req.body.manufacturer_id;
  const supplier_id = req.body.supplier_id;
  const stock_qty = req.body.stock_qty;
  const created_at = req.body.created_at;
  const dept_id = req.body.dept_id;
  const inventory_value = req.body.inventory_value;
  const user_id = req.body.user_id;
  const item_code = req.body.item_code;
  const stock_id = req.body.stock_id;

  db.query(
    "UPDATE stocktable SET manufacturer_id = ?, item_code =?,supplier_id = ?, stock_qty = ?, created_at = ?, dept_id = ?, inventory_value = ?, user_id = ? WHERE stock_id = ?",
    [
      manufacturer_id,
      item_code,
      supplier_id,
      stock_qty,
      created_at,
      dept_id,
      inventory_value,
      user_id,
      stock_id,
    ]
  )
    .then(() => res.status(200).json({ message: "Error updating item." }))
    .catch((error) => console.log(error));
  //   (error, result) => {
  //     if (error) {
  //       console.log(error);
  //       res.status(500).send("Error updating item.");
  //     } else {
  //       res.send("Edited Successfully");
  //     }
  //   }
  // );
});


app.post("/itemadd", (req, res) => {
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
  console.log(unit);
  db.query(
    `INSERT INTO itemtable 
                (item_type, item_name, item_subname, item_spec1,item_spec2, item_spec3, cost_per_item, quantity_units, manufacturer_id, supplier_id) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      itemType,
      itemName,
      subName,
      Spec1,
      Spec2,
      Spec3,
      cost,
      unit,
      manufacturerId,
      supplierId,
    ],
    (error, result) => {
      if (error) console.log(error);
      else res.send("Item added successfully");
    }
  );
});

app.post("/stockadd", (req, res) => {
  const item_code = req.body.itemcode;
  const manufacturerId = req.body.manufacturerId;
  const supplierId = req.body.supplierId;
  const stockQty = req.body.stock_qty;
  const inventoryValue = req.body.inventoryValue;
  const userId = req.body.userId;
  const labCode = req.body.labCode;
  const currDate = new Date();

  db.query(
    `INSERT INTO stocktable (item_code, manufacturer_id, supplier_id, stock_qty, inventory_value, user_id, created_at, dept_id) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      item_code,
      manufacturerId,
      supplierId,
      stockQty,
      inventoryValue,
      userId,
      currDate.toISOString().split("T")[0],
      labCode,
    ],
    (error, result) => {
      if (error) console.log(error);
      else console.log(result);
    }
  );
});

app.get("/getManufacturer", (req, res) => {
  db.query("SELECT * FROM manufacturer", (error, result) => {
    if (error) console.log(error);
    res.send(result);
  });
});

app.get("/getSupplier", (req, res) => {
  db.query("SELECT * FROM supplier", (error, result) => {
    res.send(result);
  });
});

app.get("/getItems", (req, res) => {
  db.query("SELECT * FROM itemtable", (error, result) => {
    if (error) console.log(error);
    else {
      res.send(result);
    }
  });
});

app.get("/getStock", (req, res) => {
  db.query("SELECT * FROM stocktable", (error, result) => {
    if (error) console.log(error);
    else {
      res.send(result);
    }
  });
});

app.get("/getQuantityUnits", (req, res) => {
  db.query("SELECT * FROM quantity_units", (error, result) => {
    if (error) console.log(error);
    else {
      res.send(result);
    }
  });
});

app.get("/getAdminStockData", (req, res) => {
  db.query("SELECT * FROM admin_stock_view", (error, result) => {
    if (error) console.log(error);
    res.send(result);
  });
});

app.get("/getQuantityUnits", (req, res)=>{
    db.query("SELECT * FROM quantity_units", (error, result)=>{
        if(error)console.log(error);
        else{
            res.send(result);
        }
    })
})

app.get("/getAdminStockData", (req,res)=>{
    db.query("SELECT * FROM admin_stock_view", (error, result)=>{
        if(error)console.log(error);
        res.send(result)
    })
})

app.post("/getTransferData", (req,res)=>{
    const user_dept = req.body.dept_code
    db.query("SELECT * FROM transfer_request_merged_view WHERE transfer_to = ?", [user_dept])
    .catch((error)=>res.status(500).json({error:"There was some Error"}))
    .then((response)=>res.status(200).json({data:response}))
})


app.post("/transferRequest", (req,res)=>{

    // console.log(req.body.resData.itemcode)
    const item_code = req.body.resData.itemcode;
    const manufacturer_id = req.body.resData.manufacturerId;
    const supplier_id = req.body.resData.supplierId;
    const transfer_qty = req.body.resData.stockReq;
    const transfer_to = req.body.resData.reqLabId;
    const transfer_from =  req.body.resData.fromLabId;
    const user_id = req.body.resData.user_id;

        db.query("INSERT INTO transfertable (item_code, manufacturer_id, supplier_id, transfer_qty, transfer_to, transfered_from, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)",[item_code, manufacturer_id, supplier_id, transfer_qty, transfer_to, transfer_from, user_id] )
        .then(()=>res.status(200).json({message: "Inserted Sucessfully"})).catch((error)=>res.status(400).json({error:"There was some Error"}));

})

app.post("/getTrackTransfer", (req, res)=>{
    const user_dept = req.body.dept_code
    // console.log(user_dept);
    db.query("Select * FROM transfer_request_merged_view WHERE transfer_to = ?" ,[user_dept])
    .catch((error)=>res.status(500).json({error:"There was some Error"}))
    .then((response)=>{
        console.log(response)
        res.status(200).json({data:response})
    });
})



app.listen(4000, ()=>console.log("App listening on port 4000"));
