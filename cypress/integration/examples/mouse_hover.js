// Mouse Hover events handles in Cypress





/// <reference types = "Cypress" />

describe('Mouse hover in Cypress Demo ',function() {
    // it('mouse hover and click on element',function(){
    //     cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    //     cy.get(".mouse-hover-content").invoke('show')
    //     cy.contains('Top').click()
    //     cy.url().should('includes','top')
    // })


    it('mouse hover and click on element (globalsqa)',function(){
        cy.visit('https://www.globalsqa.com/angularjs-protractor-practice-site/')
        cy.on('uncaught:exception', (err, runnable) => { 
              return false
            });
        
        // cy.get("#menu >ul >li:nth-child(4)").invoke('show')
        // cy.get('.sub-menu').invoke('show')
        // cy.contains('AlertBox').click();
        //cy.get("#menu >ul >li:nth-child(4)").trigger('mouseover')
        cy.contains('Tester’s Hub').trigger('mouseover')
        cy.contains('Demo Testing Site').trigger('mouseover')
        cy.contains('AlertBox').invoke('show').click({force: true});
        
    })
})