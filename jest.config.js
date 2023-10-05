/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/__test__/**',
    '!**/index.ts',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/vendor/**'
  ]
};
