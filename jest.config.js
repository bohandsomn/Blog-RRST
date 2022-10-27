const nextJest = require('next/jest')
const createJestConfig = nextJest({ dir: './' })
const customJestConfig = {
  moduleDirectories: ['node_modules', __dirname],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/packages/(.*)$': '<rootDir>/src/packages/$1',
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
  },
}

module.exports = createJestConfig(customJestConfig);