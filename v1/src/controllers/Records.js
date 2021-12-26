const { list } = require("../services/Records");

const index = (req, res, next) => {
    list(req.body)
        .then((records) => {
            if (records[0] === undefined) {
                return res.status(404).send({ code: 404, msg: "No entry found."});
            }
            res.status(200).send({ code: 0, msg: "Success", records });
        })
        .catch((e) => {
            console.log("error :>>", e)
        });
};

module.exports = { index };
