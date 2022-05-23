const express = require('express');
const router = express.Router();

const contributeController = require('../controllers/contribute.controller');

// get all pgs
router.post('/',contributeController.insertContribute);


module.exports = router;