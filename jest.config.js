module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "components/**/*.{js,jsx}",
    "lib/**/*.{js,jsx}",
    "pages/**/*.{js,jsx}"
  ],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"]
};
