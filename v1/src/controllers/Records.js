const { list } = require("../services/Records");
const ApiError = require("../errors/ApiError");

const index = (req, res, next) => {
    list(req.body)
        .then((records) => {
            if (records[0] === undefined) {
                return next(new ApiError("No such entry.", 404));
            }
            res.status(200).send({ code: 0, msg: "Success", records });
        })
        .catch((e) => {
            next(new ApiError(e?.message, 500));
        });
};

module.exports = { index };
