import redis from 'redis'
import { logger } from './logger.js'

export const client = redis.createClient({
  socket: {
    host: '127.0.0.1',
  },
})

client.on('error', (err) => logger.error('Redis Client Error', err))

await client.connect()
