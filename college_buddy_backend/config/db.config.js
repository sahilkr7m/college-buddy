const mysql = require("mysql2");

//mysql connection

require("dotenv").config();
const dbCon = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: "collegebuddy",
});

dbCon.connect(function (err) {
  if (err) throw err;
  console.log("Database connection established!!");
});

module.exports = dbCon;
