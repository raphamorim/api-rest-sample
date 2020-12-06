import {jest} from '@jest/globals'
import healthRoute from '../health.mjs'

const response = {
  send: jest.fn(),
};

describe('Health route', () => {
  test('should be called one time with RUNNING as content', () => {
    expect(healthRoute).toBeDefined();

    healthRoute({}, response);

    expect(response.send).toHaveBeenCalledTimes(1);
    expect(response.send).toHaveBeenCalledWith('RUNNING');
  });
})