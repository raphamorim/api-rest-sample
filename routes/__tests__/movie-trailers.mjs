import { jest } from '@jest/globals'
import movieTrailersRoute from '../movie-trailers.mjs'

describe('Movie Trailers route', () => {
  test('should return', () => {
    expect(movieTrailersRoute).toBeDefined()
  })
})
