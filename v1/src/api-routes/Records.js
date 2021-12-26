const express = require("express");
const { index } = require("../controllers/Records");
const validate = require("../middlewares/validate");
const RecordValidation = require("../validations/Records");

const router = express.Router();

//Get filtered records route
router.route("/").post(validate(RecordValidation.listValidation), index);

module.exports = router;