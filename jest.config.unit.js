/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['<rootDir>/**/*.test.ts', '<rootDir>/**/**/*.test.tsx'],
    verbose: true,
};