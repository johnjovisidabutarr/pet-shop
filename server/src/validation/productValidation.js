import Joi from 'joi'

const addProductSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
})

export { addProductSchema }
