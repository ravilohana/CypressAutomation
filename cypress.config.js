const { defineConfig } = require("cypress");

module.exports = defineConfig({

  projectId: "eggvo6",
 
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
   // specPattern : 'cypress/integration/examples/*.js',
    specPattern : 'cypress/integration/Framework_Stuff/*.js',
    
  },
//  chromeWebSecurity: false
  experimentalStudio: true,
  chromeWebSecurity : false,
  defaultCommandTimeout: 10000,
  reporter: 'mochawesome'

});
