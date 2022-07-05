import { jestConfig, defaultConfig } from '../src/jest-config';

test('should return default config', () => {
  expect(jestConfig()).toEqual(defaultConfig);
});
