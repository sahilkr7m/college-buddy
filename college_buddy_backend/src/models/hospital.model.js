const dbCon = require("../../config/db.config");

var Hospital = function (hospital) {
  this.name = hospital.name;
  this.address = hospital.address;
  this.category = hospital.category;
  this.rating = hospital.rating;
  this.urls = hospital.urls;
  this.image = hospital.image;
};

// get all Hospitals
Hospital.getAllHospitals = (result) => {
  dbCon.query(
    "	SELECT id,name,address,CONCAT('http://localhost:3000/upload/',image) AS image,category, rating, urls FROM hospital",
    (err, res) => {
      if (err) {
        console.log("Error while fetching hospitals");
        result(null, err);
      } else {
        console.log("Hospital fetched successfully");
        result(null, res);
      }
    }
  );
};

// get hospital by Id
Hospital.getHospitalById = (id, result) => {
  dbCon.query(
    "	SELECT id,name,address,CONCAT('http://localhost:3000/upload/',image) AS image,category, rating, urls FROM hospital where `id` = ?",
    id,
    (err, res) => {
      if (err) {
        console.log("Error while fetching hospital by id", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
module.exports = Hospital;
