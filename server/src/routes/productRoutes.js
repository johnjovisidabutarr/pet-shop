import express from 'express'
import productController from '../controllers/productController.js'
import multer from 'multer'

const uploadMiddleware = multer({ dest: 'uploads/' })
export const productRoute = express.Router()

productRoute.get('/get-all', productController.getProducts)
productRoute.post(
  '/add',
  uploadMiddleware.single('file'),
  productController.addProduct
)
