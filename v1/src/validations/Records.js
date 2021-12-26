const Joi = require("joi").extend(require("@joi/date"));

const listValidation = Joi.object({
  startDate: Joi.date().format("YYYY-MM-DD").utc().required().messages({
    "date.base": `'startDate' should be a type of 'date'`,
    "date.empty": `'startDate' cannot be an empty field`,
    "any.required": `'startDate' is a required field`,
  }),

  endDate: Joi.date()
    .format("YYYY-MM-DD")
    .utc()
    .min(Joi.ref("startDate"))
    .required()
    .messages({
      "date.base": `'endDate' should be a type of 'date'`,
      "date.empty": `'endDate' cannot be an empty field`,
      "date.min": `'endDate' must be greater than or equals to 'startDate'`,
      "any.required": `'endDate' is a required field`,
    }),

  minCount: Joi.number().required().messages({
    "number.base": `'minCount' should be a type of 'number'`,
    "number.empty": `'minCount' cannot be an empty field`,
    "any.required": `'minCount' is a required field`,
  }),

  maxCount: Joi.number().min(Joi.ref("minCount")).required().messages({
    "number.base": `'maxCount' should be a type of 'number'`,
    "number.empty": `'maxCount' cannot be an empty field`,
    "number.min": `'maxCount' must be greater than or equals to 'minCount'`,
    "any.required": `'maxCount' is a required field`,
  }),
});

module.exports = { listValidation };
