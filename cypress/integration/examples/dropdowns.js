// dropdwons in cypress

/// <reference types = "Cypress" />

describe('Drop-down in Cypress Suite ', function(){
    // Static drop-down
    it('Static drop down in cypress test', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#dropdown-class-example').select('option3').should('have.value','option3')
    })
    // Dynamic drop-down
    it('Dynamic drop down in cypress test', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#autocomplete').type('in')

        cy.get('.ui-menu-item div').each(($e1,index,$list)=>{
            cy.log($e1.text())
            if($e1.text()==="India"){
                cy.wrap($e1).click();
            }

        })

    })
})
