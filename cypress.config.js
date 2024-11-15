const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //reporter: 'cypress-mochawesome-reporter',
  env: {
    url: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  },
  projectId: "bxdz1v",
  e2e: {
    setupNodeEvents(on, config) {
      //require('cypress-mochawesome-reporter/register')(on);
      // implement node event listeners here
      config.env.URL = process.env.URL;
      return config;
    },


    specPattern: 'cypress/e2e/*.ts'
  },
});
