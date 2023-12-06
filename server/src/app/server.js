import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import { productRoute } from '../routes/productRoutes.js'
import { errorMiddleware } from '../middleware/errorMiddleware.js'

export const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const __destname = path.join(__dirname, '../../uploads')

app.use(express.json())
app.use(cors())
app.use('/api/product/get/uploads', express.static(__destname))

app.use('/api/product', productRoute)

app.use(errorMiddleware)
