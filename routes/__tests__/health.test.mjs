import { jest } from '@jest/globals'
import healthRoute from '../health.mjs'

describe('/health', () => {
  test('should be called one time with RUNNING as content', () => {
    const response = {
      send: jest.fn(),
    }

    expect(healthRoute).toBeDefined()

    healthRoute({}, response)

    expect(response.send).toHaveBeenCalledTimes(1)
    expect(response.send).toHaveBeenCalledWith('RUNNING')
  })
})
