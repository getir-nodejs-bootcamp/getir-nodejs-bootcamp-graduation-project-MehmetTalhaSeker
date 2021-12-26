const express = require("express");
const { index } = require("../controllers/records");
const validate = require("../middlewares/validate");
const RecordValidation = require("../validations/records");

const router = express.Router();

router.route("/").post(validate(RecordValidation.listValidation), index);

module.exports = router;