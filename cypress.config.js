const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    url: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.env.URL = process.env.URL;
      return config;
    },


    specPattern: 'cypress/e2e/*.ts'
  },
});
