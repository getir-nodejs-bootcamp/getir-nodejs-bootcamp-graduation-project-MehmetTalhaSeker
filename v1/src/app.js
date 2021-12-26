const express = require("express");
const config = require("./config");
const loader = require("./loaders");
const { RecordRoutes } = require("./api-routes");

config();
loader();

const app = express();

app.use(express.json());

app.listen(process.env.APP_PORT, () => {
    console.log(`SERVER IS UP ON PORT ${process.env.APP_PORT}...`);
    app.use("/records", RecordRoutes);
});

module.exports = app;
