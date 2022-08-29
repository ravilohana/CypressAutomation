const { defineConfig } = require("cypress");

module.exports = defineConfig({
 
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
   // specPattern : 'cypress/integration/examples/*.js',
    specPattern : 'cypress/integration/**/*.js'
    
  },
//  chromeWebSecurity: false
  experimentalStudio: true,
  chromeWebSecurity : false
});
