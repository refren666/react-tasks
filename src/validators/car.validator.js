import Joi from "joi";

export const CarValidator = Joi.object({
  model: Joi.string().regex(new RegExp('^[a-zA-ZА-я]{1,20}$')).required().messages({
    'string.empty':'"Model" cannot be empty',
    'string.pattern.base':'Only letters (from 1 to 20 letters)'
  }),
  year: Joi.number().min(1900).max(2022).required().messages({
    'number.base':'Year can be from 1900 to 2022',
    'number.min':'Year cannot be lower than 1900',
    'number.max':'Year cannot be higher than 2022'
  }),
  price: Joi.number().min(1).max(1_000_000).required().messages({
    'number.base':'Price can be from 1 to 1.000.000',
    'number.min':'Price cannot be lower than 1',
    'number.max':'Price cannot be higher than 1.000.000'
  })
})