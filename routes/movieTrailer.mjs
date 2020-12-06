// @flow
import express from 'express'

import config from '../config/index.mjs'
import logger from '../utils/logger.mjs'

const { isDev } = config

async function movieTrailerGet(req, res) {
  res.setHeader('Content-Type', 'text/json')

  const movieURL = req.body.url
  if (!movieURL) {
    if (isDev) {
      logger.debug('movieURL not found')
    }
    res.send(400)
  }

  res.json({})
}

const router = express.Router()
router.get('/*', movieTrailerGet)

export default router