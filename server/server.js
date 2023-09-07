const express = require("express");
const https = require('https');
const bodyParser = require("body-parser");
const cors = require("cors");
const {
    verifyToken,
    createSession,
    getUser,
} = require("./auth/loginMiddleware.js");
const cookieParser = require("cookie-parser");
const db = require("./database/db.js");
const {getTransferData, transferRequest, acceptRequest, rejectRequest, cancelTransferRequest , deleteTransferRequest} = require("./transfer.js");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/api/", (req, res) => {
    res.cookie("heelo", "hai");
    res.send("Hello from backend");
});

app.post("/api/loginUser", verifyToken, createSession, (req, res) => {
    const token = res.locals.token;
    // console.log(token)
    res.send(token);
});

app.post("/api/getUser", getUser);

app.post("/api/manufactureradd", (req, res) => {
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

app.post("/api/supplieradd", (req, res) => {
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

app.post("/api/itemEdit", (req, res) => {
  const item_type = req.body.item_type;
  const item_name = req.body.item_name;
  const item_subname = req.body.item_subname;
  const item_description = req.body.item_description;
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
          item_description = ?,
          cost_per_item = ?, 
          quantity_units = ?, 
          manufacturer_id = ?, 
          supplier_id = ?
      WHERE item_code = ?`,
    [
      item_type,
      item_name,
      item_subname,
      item_description,
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

app.post("/api/stockEdit", (req, res) => {
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


app.post("/api/itemadd", (req, res) => {

    const itemType = req.body.itemType;
    const manufacturerId = req.body.manufacturerName;
    const supplierId = req.body.supplierName;
    const itemName = req.body.itemName;
    const subName = req.body.subName;
    const desc = req.body.desc;
    const cost = req.body.cost;
    const unit = req.body.units;
    console.log(unit);
    db.query(
        `INSERT INTO itemtable 
                (item_type, item_name, item_subname, item_description, cost_per_item, quantity_units, manufacturer_id, supplier_id) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            itemType,
            itemName,
            subName,
            desc,
            cost,
            unit,
            manufacturerId,
            supplierId,
        ]
    );
});

app.post("/api/stockadd", (req, res) => {

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
        ]
    ).then((response) => {
        if (response.affectedRows > 0)
            res.status(200).json({ message: "Stock Created Sucessfully" });
        else
            res.status(200).json({ message: "Data Not Inserted check for errors" });
    })
        .catch((error) => console.log(error));
});

app.get("/api/getManufacturer", (req, res) => {
    db.query("SELECT * FROM manufacturer")
        .catch((error) => res.send(error))
        .then((response) => res.send(response))
});

app.get("/getCategories", (req, res) => {
  db.query("SELECT * FROM categories_view", (error, result) => {
    res.send(result);
  });
});

app.get("/getInventory", (req, res) => {
  db.query("SELECT CONCAT(UPPER(LEFT(DATE_FORMAT( created_at , '%b'), 3)), ' ', RIGHT(DATE_FORMAT(created_at, '%Y'), 2)) AS name , SUM(inventory_value) AS Cost FROM stocktable GROUP BY created_at", (error, result) => {
    res.send(result);
  });
});

app.get("/getLabItem", (req, res) => {
  db.query("SELECT * FROM lab_item_view", (error, result) => {
    res.send(result);
  });
});


app.get("/getItems", (req, res) => {
  db.query("SELECT * FROM itemtable", (error, result) => {
    if (error) console.log(error);
    else {
      res.send(result);
    }
  })});

app.get("/api/getSupplier", (req, res) => {
    db.query("SELECT * FROM supplier", (error, result) => {
        res.send(result);
    });
});

app.get("/api/getItems", (req, res) => {
    db.query("SELECT * FROM itemtable", (error, result) => {
        if (error) console.log(error);
        else {
            res.send(result);
        }
    });
});

app.get("/api/getStock", (req, res) => {
    db.query("SELECT * FROM stocktable", (error, result) => {
        if (error) console.log(error);
        else {
            res.send(result);
        }
    });
});


app.get("/api/getAdminStockData", (req, res) => {
    db.query("SELECT * FROM admin_stock_view", (error, result) => {
        if (error) console.log(error);
        res.send(result);
    });
});

app.get("/api/getQuantityUnits", (req, res) => {
    db.query("SELECT * FROM quantity_units", (error, result) => {
        if (error) console.log(error);
        else {
            res.send(result);
        }
    })
})



app.post("/api/getTransferData", getTransferData)

app.post("/api/transferRequest", transferRequest)

app.post("/api/cancelTransferRequest", cancelTransferRequest);

app.post("/api/deleteTransferrequest", deleteTransferRequest)

app.post("/api/getTrackTransfer", (req, res) => {
    try {
        const user_dept = req.body.dept_code
        // console.log(user_dept);
        db.query("Select * FROM transfer_request_merged_view WHERE transfer_to = ?", [user_dept])
            .catch((error) => res.status(500).json({ error: "There was some Error" }))
            .then((response) => {
                res.status(200).json({ data: response })
            });
    } catch (error) {
        console.log(error);
    }
})

app.post("/api/acceptRequest", acceptRequest);

app.post("/api/rejectRequest", rejectRequest);

const server = https.createServer()

app.listen(4000, () => console.log("App listening on port 4000"));
