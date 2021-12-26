const { list } = require("../services/Records");

const index = (req, res) => {
    list()
        .then((records) => {
            res.status(200).send({ code: 0, msg: "Success", records });
        })
        .catch((e) => {
            console.log("error :>>", e)
        });
};

module.exports = { index };
