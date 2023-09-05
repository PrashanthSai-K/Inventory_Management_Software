const db = require("./database/db.js");


const getTransferData = function (req,res, next){
    const user_dept = req.body.dept_code
    db.query("SELECT * FROM transfer_request_merged_view WHERE transfered_from = ? AND status = ?", [user_dept, "PENDING"])
        .catch((error) => res.status(500).json({ error: "There was some Error" }))
        .then((response) => {
            if(response.length > 0){
                res.status(200).json({ data: response })
            }else{
                res.status(200).json({ data: "No Data"})
            }
         })
}


module.exports = {
    getTransferData : getTransferData,
}