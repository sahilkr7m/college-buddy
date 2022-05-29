const express = require("express");
const router = express.Router();

const hospitalController = require("../controllers/hospital.controller");

// get all hospitals
router.get("/", hospitalController.getHospitalList);

router.get("/:id", hospitalController.getHospitalById);

module.exports = router;
