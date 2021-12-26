const { list } = require("../services/records");
const ApiError = require("../errors/ApiError");

/**
 * @description Get all filtered records
 * @route       POST /records
 * @params      (req : Request Object, res : Response Object, next : Callback Function)
 * @return      {object} Record List
 */
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
