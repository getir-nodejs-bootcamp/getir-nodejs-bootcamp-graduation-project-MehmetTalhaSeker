const path = require("path");
const fs = require("fs");
const morgan = require("morgan");


// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, "../../logs/network", "access.log"), { flags: "a" });

// setup the logger
const logger = morgan("tiny", { stream: accessLogStream })

module.exports = logger;