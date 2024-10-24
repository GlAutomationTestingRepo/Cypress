import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1920, 
  viewportHeight: 1200,
  e2e: {
    baseUrl: 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login'
    
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
  },
});
