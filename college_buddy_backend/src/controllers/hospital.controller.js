const HospitalModel = require("../models/hospital.model");

// get all hospitals List
exports.getHospitalList = (req, res) => {
  HospitalModel.getAllHospitals((err, docs) => {
    if (err) res.send(err);
    res.send(docs);
  });
};

// get Hospital by Id
exports.getHospitalById = (req, res) => {
  HospitalModel.getHospitalById(req.params.id, (err, docs) => {
    if (err) res.send(err);
    res.json(docs);
  });
};
