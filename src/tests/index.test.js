...
 "scripts": {
    "start:dev": "node src/server.js",
    "test:dev": "jest --coverage"
  },
  "jest": {
    "testEnvironment":  "node",
    "coveragePathIgnorePatterns": [
        "/node_modules/"
    ],
    "testResultsProcessor":  "jest-sonar-reporter"
  },
  "jestSonar": {
    "reportPath":  "coverage",
    "reportFile":  "test-reporter.xml",
    "indent":  2
  },
...