const ApiError = require("../errors/ApiError");
const notFound = (req, res, next) => {
  next(new ApiError("Page not found", 404));
};

module.exports = notFound;