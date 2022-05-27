const express = require("express");
const router = express.Router();

const contributeController = require("../controllers/contribute.controller");

// post new contribution
router.post("/", contributeController.insertContribute);

module.exports = router;
