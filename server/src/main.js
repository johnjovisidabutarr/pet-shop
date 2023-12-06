import { db } from './app/database.js'
import { logger } from './app/logger.js'
import { app } from './app/server.js'

const PORT = 5000

// Connect the db to MongoDB Cloud
db

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`)
})
