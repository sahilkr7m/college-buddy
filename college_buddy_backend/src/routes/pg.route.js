const express = require("express");
const router = express.Router();

const pgController = require("../controllers/pg.controller");

// get all pgs
router.get("/", pgController.getPgList);

// get pg by id
router.get("/:id", pgController.getPgById);

module.exports = router;
