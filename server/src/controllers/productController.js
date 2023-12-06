import { logger } from '../app/logger.js'
import productServices from '../services/productServices.js'
import expressAsyncHandler from 'express-async-handler'

const getProducts = expressAsyncHandler(async (req, res) => {
  const result = await productServices.getAll()
  res.json(result)
})

const addProduct = expressAsyncHandler(async (req, res) => {
  const result = await productServices.add(req.file, req.body)
  res.json(result)
})

export default {
  getProducts,
  addProduct,
}
