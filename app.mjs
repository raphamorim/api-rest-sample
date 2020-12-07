// @flow
import express from 'express'
import bodyParser from 'body-parser'

import routes from './routes/index.mjs'
import logger from './utils/logger.mjs'
import config from './config/index.mjs'

const app = express()
const router = express.Router()
const { isDev, port } = config()

router.use((req, res, next) => {
  isDev && logger.debug(req.originalUrl)
  next()
})

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

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// Routes
app.use('/', router)
app.use('/health', routes.health)
app.use('/trailers', routes.movieTrailer)

app.listen(port, () => {
  logger.info(`API is running on port: ${port}!`)
})