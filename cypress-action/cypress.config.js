const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'nn4zww',
  env: {
    token: '',
    releasetag: '',
    applicationId: "",
    codeCoverage: {
      url: '/api/__coverage__',
    },
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://playground.meshplay.khulnasoft.com',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
  videoCompression: false
})