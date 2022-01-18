import Joi from "joi";

export const InputValidator = Joi.object({
  id: Joi.number().required().messages({
    'number.base':'Enter valid ID'
  }),
  model: Joi.string().regex(new RegExp(/^[a-zA-Z]{2,20}$/)).required().messages({
    'string.empty':'Field "Model" cannot be empty!',
    'string.pattern.base':'Field "Model" may contain only Latin characters (from 2 to 20)'
  }),
  price: Joi.number().min(0).max(1_000_000).required().messages({
    'number.base':'Price must be from 0 to 1,000,000',
    'number.min':'Price must be from 0 to 1,000,000',
    'number.max':'Price must be from 0 to 1,000,000'
  }),
  year: Joi.number().min(1900).max(new Date().getFullYear()).required().messages({
    'number.base':'Year must be from 1900 to today\'s',
    'number.min':'Year must be from 1900 to today\'s',
    'number.max':'Year must be from 1900 to today\'s'
  })
})