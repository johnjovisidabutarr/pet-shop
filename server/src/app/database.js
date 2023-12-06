import 'dotenv/config'
import mongoose from 'mongoose'
import { logger } from './logger.js'

mongoose.connect(process.env.MONGODB_URI)

export const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', function () {
  logger.info('Database connected successfully')
})
