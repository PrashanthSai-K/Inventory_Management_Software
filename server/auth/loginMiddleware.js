const { OAuth2Client } = require("google-auth-library");
const axios = require("axios");
const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const key = process.env.JWT_KEY;

const conn = mysql.createConnection({
  host: process.env.DB_HOST_PUBLIC,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT_PUBLIC,
});

conn.connect(() => {
  console.log("Connected to DB sucessfully");
});

const clientId =
  "494572126295-g8ok8a5g0kvr3ceodj12h5orod5oe38v.apps.googleusercontent.com";
const client = new OAuth2Client(clientId);

const verifyToken = async function (req, res, next) {
  const idToken = req.body.res.access_token;
  try {
    const response = await axios.get(
      `https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${idToken}`
    );
    const tokenInfo = response.data;
    res.locals.payload = response.data;
    next();
    // console.log("Token verified successfully:", tokenInfo);
  } catch (error) {
    console.error("Error verifying token:", error);
  }
  
};

const createSession = function (req, res, next) {
  // console.log(res.locals.payload);
  const email = res.locals.payload.email;
  console.log(email);
  conn.query(
    "SELECt * FROM faculty WHERE email_id = ?",
    [email],
    (error, result) => {
      if (error) {
        console.log(error);
        return;
      };
      JSON.parse(JSON.stringify(result));
      console.log(result[0].role);
      const token = jwt.sign(
        {
          user_id: result[0].faculty_id,
          email_id: result[0].email_id,
          dept_code: result[0].department_code,
          role: result[0].role,
        },
        key
      );
      // console.log(token);
      res.locals.token = token;
      next()
    }
  );
};

const getUser = function(req, res, next){
    const token = req.body.token;
    try{
      const data = jwt.verify(token, key);
      res.send(data)
    }catch(error){
     res.send("invalid token");
    }
}

module.exports = { verifyToken: verifyToken, createSession: createSession, getUser: getUser };
