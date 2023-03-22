import { When, Then, Given } from "cypress-cucumber-preprocessor/steps";

Given("I visit {word}", (url) => {
  cy.visit(url);
});

When("I add 1", () => {
  cy.getByTestId('add-count').click();
});

When("I remove 1", () => {
  cy.getByTestId('remove-count').click();
});

When("I reset", () => {
  cy.getByTestId('reset-count').click();
});

Then("the counter value is {int}", (value) => {
  cy.getByTestId('count-value').contains(value);
});
