import { jest } from '@jest/globals'
import movieTrailerRoute from '../movie-trailers.mjs'

describe('/trailers', () => {
  // https://www.ietf.org/rfc/rfc4627.txt
  test('should set content as application/json', () => {
    const request = {
      body: {
        url: 'https://content.viaplay.se/pc-se/film/bad-boys-for-life-2020',
      },
    }
    const response = {
      setHeader: jest.fn(),
      json: jest.fn(),
      sendStatus: jest.fn(),
    }

    expect(movieTrailerRoute).toBeDefined()
    movieTrailerRoute(request, response)
    expect(response.setHeader).toHaveBeenCalledTimes(1)
    expect(response.setHeader).toHaveBeenCalledWith(
      'Content-Type',
      'application/json'
    )
  })

  test.skip('should return list of trailers with 200 as status code', () => {})

  test.skip('should return 404 when movieId isnt found', () => {})

  test.skip('should return 404 when imdbId isnt found', () => {})

  test.skip('should return 500 when theMovieDB fails', () => {})
})
