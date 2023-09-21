
const mysql = require("mysql");
const dotenv = require('dotenv').config();

// Create a connection pool
const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "password",
  database: "LAB",
  port: "3306"
});

pool.getConnection((err, connection)=>{
  if(err){
    console.log(err);
    return;
  }else{
    console.log("connected");
  }

  connection.release();
})

module.exports = {
  query: (sql, values) => {
    return new Promise((resolve, reject) => {
      pool.query(sql, values, (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });
  },
  close: () => {
    pool.end();
  },
  getConnection: () => {
    return new Promise((resolve, reject) => {
      pool.getConnection((error, connection) => {
        if (error) {
          return reject(error);
        }
        resolve(connection);
      });
    });
  }
};
