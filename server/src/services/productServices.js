import { logger } from '../app/logger.js'
import { client } from '../app/redis.js'
import { ResponseError } from '../error/ResponseError.js'
import { Product } from '../models/productSchema.js'
import { addProductSchema } from '../validation/productValidation.js'
import { validate } from '../validation/validation.js'

const getAll = async () => {
  let isCached = false
  let result

  const cacheKey = 'product'
  const cacheResult = await client.get(cacheKey)

  if (cacheResult) {
    isCached = true
    result = JSON.parse(cacheResult)
  } else {
    result = await Product.find()
    await client.set(cacheKey, JSON.stringify(result), {
      EX: 180,
      NX: true,
    })
  }

  return result
}

const add = async (file, data) => {
  const { originalname, path } = file
  const parts = originalname.split('.')
  const ext = parts[parts.length - 1]
  const newPath = path + '.' + ext

  const product = validate(addProductSchema, data)

  const isExisted = await Product.findOne({ name: product.name })
  if (isExisted) {
    fs.unlinkSync(path)
    throw new ResponseError(400, 'Product with such name already exists')
  }

  fs.renameSync(path, newPath)

  const result = await Product.create({
    name: product.name,
    price: product.price,
    image: newPath,
  })

  return result
}

export default {
  getAll,
  add,
}
