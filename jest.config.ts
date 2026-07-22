
import nextJest from 'next/jest.js'
import type {Config} from 'jest';
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})
const config: Config = {
  clearMocks: true,
  coverageProvider: "v8",
  testEnvironment: "jsdom",
};
export default createJestConfig(config)

/**
 * Under the hood, next/jest is automatically configuring Jest for you, including:
 * Setting up transform using the Next.js Compiler.
 * Auto mocking stylesheets (.css, .module.css, and their scss variants), image imports and next/font.
 * Loading .env (and all variants) into process.env.
 * Ignoring node_modules from test resolving and transforms.
 * Ignoring .next from test resolving.
 * Loading next.config.js for flags that enable SWC transforms.

 */