const express = require("express");
const config = require("./config");
const loader = require("./loaders");
const { RecordRoutes } = require("./api-routes");
const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");
const cors = require("cors");
const logger = require("./scripts/logger/requestLogger");

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
