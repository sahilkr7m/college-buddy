var dbConn = require("../../config/db.config");

var Pg = function (pg) {
  this.name = pg.name;
  this.address = pg.address;
  this.phone = pg.phone;
  this.rent = pg.rent;
  this.image = pg.image;
  this.rent = pg.rent;
};

// get all pgs
Pg.getAllPgs = (result) => {
  dbConn.query(
    "SELECT id,name,address,category,rating,urls,  CONCAT('http://localhost:3000/upload/',image) AS image, lat, lng FROM pg",
    (err, res) => {
      if (err) {
        console.log("Error while fetching pgs", err);
        result(null, err);
      } else {
        console.log("Pgs fetched successfully");
        result(null, res);
      }
    }
  );
};

// get pg by id
Pg.getPgById = (id, result) => {
  dbConn.query(
    "SELECT id,name,address,category,rating,urls, CONCAT('http://localhost:3000/upload/',image) AS image, lat, lng, rent FROM pg where id = ?",
    id,
    (err, res) => {
      if (err) {
        console.log("Error while fetching pg id", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

module.exports = Pg;
