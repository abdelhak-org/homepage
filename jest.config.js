
// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Path to Next.js app to load next.config.js
  dir: './'
})

/** @type {import('@jest/types').Config.InitialOptions} */
const customJestConfig = {
  /**
   * Custom config goes here, I am not adding it to keep this example simple.
   * See next/jest examples for more information.
   * 
   */
   setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
 testEnvironment: "jest-environment-jsdom",}

 

module.exports = async () => ({
  ...(await createJestConfig(customJestConfig)()),
  transformIgnorePatterns: [
    // The regex below is just a guess, you might tweak it
    'node_modules/(?!(react-markdown|rehype-raw|remark-gfm)/)',
  ]
})
/*

const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

/**@type {import('jest').Config} */
// Add any custom config to be passed to Jest

//const customJestConfig = {
// setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
// testEnvironment: "jest-environment-jsdom",};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
//module.exports = createJestConfig(customJestConfig);
