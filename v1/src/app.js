const express = require("express");
const config = require("./config");
const loader = require("./loaders");
const { RecordRoutes } = require("./api_routes");
const notFound = require("./middlewares/not_found");
const errorHandler = require("./middlewares/error_handler");
const cors = require("cors");
const logger = require("./scripts/logger/request_logger");

config();
loader();

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`SERVER IS UP ON PORT ${PORT}...`);
  app.use("/records", RecordRoutes);

  app.use(notFound);
  app.use(errorHandler);
});

module.exports = app;
