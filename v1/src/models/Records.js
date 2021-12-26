const Mongoose = require("mongoose");

const RecordSchema = new Mongoose.Schema(
    {
        counts: Array,
        key: String,
        value: String,
    },
    { timestamps: { createdAt: true, updatedAt: false }, versionKey: false }
);

module.exports = Mongoose.model("record", RecordSchema);
