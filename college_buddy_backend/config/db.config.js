const mysql = require('mysql');

//mysql connection

const dbCon = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mysql1511',
    database: 'collegebuddy'
});

dbCon.connect(function (err){
    if(err) throw err;
    console.log('Database connection established!!');
})

module.exports = dbCon;