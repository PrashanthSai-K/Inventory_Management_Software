const express = require("express");
const https = require('https');
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const {
    verifyToken,
    createSession,
    getUser,
} = require("./auth/loginMiddleware.js");

const db = require("./database/db.js");
const { getTransferData, transferRequest, acceptRequest, rejectRequest, cancelTransferRequest, deleteTransferRequest } = require("./transfer.js");
const { itemEdit, stockEdit } = require("./edit.js");
const { manufacturerAdd, supplierAdd, itemAdd, stockAdd } = require("./vendor.js");


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/api/", (req, res) => {
    res.send("Hello from backend");
});

app.post("/api/loginUser", verifyToken, createSession, (req, res) => {
    const token = res.locals.token;
    // console.log(token)
    res.send(token);
});

app.post("/api/getUser", getUser);

app.post("/api/manufacturerAdd", manufacturerAdd);

app.post("/api/supplierAdd", supplierAdd);

app.post("/api/itemEdit", itemEdit);

app.post("/api/stockEdit", stockEdit);

app.post("/api/itemAdd", itemAdd);

app.post("/api/stockAdd", stockAdd);

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
    })
});

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

app.post("/api/deleteTransferrequest", deleteTransferRequest);

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
