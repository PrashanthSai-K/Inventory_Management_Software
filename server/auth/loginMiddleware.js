const { OAuth2Client } = require("google-auth-library");
const axios = require("axios");
const jwt = require("jsonwebtoken");
const key = process.env.JWT_KEY;
const mysql = require("mysql");
const dotenv = require("dotenv").config();

const db = mysql.createPool({
  host: process.env.DB_HOST_PUBLIC,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT_PUBLIC,
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
  db.query(
    "SELECT * FROM faculty WHERE email_id = ? ",
    [email],
    (error, result) => {
      if (error) {
        res.status(404).json({error:"Unknown Error"});
      } else {
        JSON.parse(JSON.stringify(result));
        // console.log(result[0]);
        const token = jwt.sign(
          {
            user_id: result[0].faculty_id,
            user_name: result[0].name,
            email_id: result[0].email_id,
            dept_code: result[0].department_code,
            role: result[0].role,
          },
          key
        );
        console.log(token);
        res.locals.token = token;
        next();
      }
    }
  );
  
};

const getUser = function (req, res, next) {
  const token = req.body.token;
  try {
    const data = jwt.verify(token, key);
    res.send(data);
  } catch (error) {
    res.status(404).json({error:"Invalid Token"});
  }
};

module.exports = {
  verifyToken: verifyToken,
  createSession: createSession,
  getUser: getUser,
};
