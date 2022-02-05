const coverageThreshold = 90;

module.exports = {
  clearMocks: true,

  collectCoverageFrom: ['./src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: coverageThreshold,
      functions: coverageThreshold,
      lines: coverageThreshold,
      statements: coverageThreshold,
    },
  },

  testEnvironment: 'jsdom',

  testResultsProcessor: 'jest-sonar-reporter',
};
