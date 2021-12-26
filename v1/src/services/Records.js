const Record = require("../models/Records");

const list = () => {
  return Record.find({});
};

module.exports = {
  list,
};
