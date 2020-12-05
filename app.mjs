// @flow
import express from 'express'
import routes from './routes/index.mjs'
import logger from './utils/logger.mjs'

const app = express()
const port = process.env['API_PORT'] || 3000

// Process listeners
process.on('exit', function() {
  logger.debug('Server process is finished.')
})

process.on('SIGINT', () => {
  logger.debug('Server process is being finished...')
  process.exit(0)
})

// https://expressjs.com/en/advanced/best-practice-security.html
app.disable('x-powered-by')

// Routes
app.use('/health', routes.health)
app.use('/movie-trailer', routes.movieTrailer)

app.listen(port, () => {
  logger.info(`API is running on port: ${port}!`)
})