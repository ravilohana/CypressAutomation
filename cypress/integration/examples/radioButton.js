/// <reference types = "Cypress" />

describe('Radio Button in Cypress ',function(){
    it('Handle radio button Test case',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('input[value="radio1"]').check().should('have.value','radio1');

    })
})