const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    codeCoverage: {
      url: '/api/__coverage__',
    },
  },
  e2e: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000/',
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      require("./cypress/plugins/index.js")(on, config);
      return config;
    },
    specPattern: "**/*.feature",
    supportFile: "cypress/support/e2e.js",
    chromeWebSecurity: false,
  },
});
