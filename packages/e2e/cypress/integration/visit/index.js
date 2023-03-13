import { When, Then } from 'cypress-cucumber-preprocessor/steps'

When('I visit {word}', (url) => {
  cy.visit(url);
})

Then('the url is {word}', (url) => {
  cy.url().should('eq', url)
})
