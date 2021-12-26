const express = require("express");
const { index } = require("../controllers/Records");

const router = express.Router();

//Get filtered records route
router.route("/").get(index);

module.exports = router;