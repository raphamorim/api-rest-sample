// @flow
import express from 'express'
import fetch from 'node-fetch'

import config from '../config/index.mjs'
import logger from '../utils/logger.mjs'
import CustomError from '../utils/custom-error.mjs'

const {
  isDev,
  apiKey,
  services: { themoviedb, youtube },
} = config()
const {
  helpers: { getURLById },
} = themoviedb
const {
  helpers: { setURL },
} = youtube

function getIMDBId(resBody) {
  let data = null
  try {
    data =
      resBody._embedded['viaplay:blocks'][0]._embedded['viaplay:product']
        .content.imdb.id
  } catch (e) {}

  return data
}

function getTrailersById(IMDBId) {
  const url = getURLById(IMDBId)
  return fetch(url)
    .then((res) => res.json())
    .then((body) => {
      const trailers = body.results.map((item) => setURL(item.key))
      return trailers
    })
}

function movieTrailerGet(req, res) {
  res.setHeader('Content-Type', 'text/json')

  const movieURL = req.body.url
  if (!movieURL) {
    if (isDev) {
      logger.debug('movieURL parameter not valid')
    }
    res.send(400)
  }

  fetch(req.body.url)
    .then((res) => {
      if (res.ok) {
        return res
      } else {
        throw new CustomError(res.statusCode)
      }
    })
    .catch((e) => {
      return res.send(500)
    })
    .then((res) => res.json())
    .then((body) => {
      const IMDBId = getIMDBId(body)
      if (!IMDBId) {
        if (isDev) {
          logger.debug('IMDB Id not found')
        }
        res.send(404)
      }

      return IMDBId
    })
    .then((IMDBId) => {
      return getTrailersById(IMDBId).then((trailers) => {
        if (!trailers) {
          if (isDev) {
            logger.debug('Trailers not found')
          }
          res.send(404)
        }
        res.json(trailers)
      })
    })
}

const router = express.Router()
router.get('/*', movieTrailerGet)

export default router
