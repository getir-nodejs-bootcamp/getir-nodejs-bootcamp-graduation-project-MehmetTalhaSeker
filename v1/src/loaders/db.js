const Mongoose = require("mongoose");

const db = Mongoose.connection;

db.once("open", () => {
    console.log("DB connection success");
});

const connectDB = async () => {
    await Mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
};

module.exports = {
    connectDB,
};
