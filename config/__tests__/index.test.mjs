import config from '../index.mjs'

describe('Config', () => {
  test('should return port when env is settled and return default when it is not', () => {
    const mockedPort = '9000'
    process.env.PORT = mockedPort
    expect(config().port).toBe(mockedPort)
    delete process.env.PORT
    expect(config().port).toBe('8080')
  })

  test('should return services config', () => {
    const { services } = config()
    expect(services.youtube.baseUrl).toBe('youtube.com')
    expect(services.themoviedb.baseUrl).toBe('api.themoviedb.org')
  })

  test('themoviedb helper to get URL by movie id', () => {
    const key = 'dummy-key'
    const id = 'dummy-id'
    process.env.THEMOVIEDB_API_KEY = key
    const { services } = config()
    const { themoviedb } = services
    expect(themoviedb.helpers.getURLById(id)).toBe(
      `http://${themoviedb.baseUrl}/3/movie/${id}/videos?api_key=${key}`
    )
    process.env.THE_MOVIE_DB_API_KEY = null
  })
})