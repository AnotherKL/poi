const { flatMap } = require('lodash')

const SRC_DIR = ['views', 'lib', 'build']

module.exports = {
  collectCoverageFrom: flatMap(SRC_DIR, directory => [
    `${directory}/**/*.{es,ts,tsx}`,
    `!${directory}/**/*.d.ts`,
  ]),
  resolver: 'jest-pnp-resolver',
  testMatch: flatMap(SRC_DIR, directory => [
    `<rootDir>/${directory}/**/__tests__/**/*.{es,ts,tsx}`,
    `<rootDir>/${directory}/**/?(*.)(spec|test).{es,ts,tsx}`,
  ]),
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(es|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$'],
  moduleFileExtensions: ['es', 'ts', 'tsx', 'json', 'node'],
}
