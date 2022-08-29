
// Handle window Tab in Cypress

/// <reference types = "Cypress" />

describe('Tab handles in Cypress Demo',function(){
    it('Tab handling in cypress assert with title of the page', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.title().should('eq','Practice Page')
        cy.get('#opentab').invoke('removeAttr','target').click();
        cy.title().should('eq','Rahul Shetty Academy');
        cy.go('back');
        cy.title().should('eq','Practice Page');

    })

    it('Tab handling in cypress assert with url of the page', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#opentab').invoke('removeAttr','target').click();
        cy.url().should('include','rahulshettyacademy.com')
        cy.go('back');
        cy.url().should('eq','https://rahulshettyacademy.com/AutomationPractice/');

    })
})