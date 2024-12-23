{
  "scripts": {
    "test": "vitest",
    "test:coverage": "vitest --coverage"
  },
  "devDependencies": {
    "vitest": "^0.30.0",  // Make sure to install the latest version of Vitest
    "@testing-library/react": "^13.0.0",
    "@testing-library/jest-dom": "^5.0.0"
  },
  "vitest": {
    "test": {
      "globals": true,
      "environment": "jsdom"
    }
  }
}
