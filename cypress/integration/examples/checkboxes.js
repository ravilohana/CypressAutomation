
/// <reference types = "Cypress" />



describe('Checkboxes Handle in Cypress Suite',function(){
    it(' Single Checkbox checked in cypress',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("#checkBoxOption1").check().should("be.checked").and('have.value', 'option1')
    })
    it(' Two Checkbox checked in cypress',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("#checkBoxOption1").uncheck().should("not.be.checked").and('have.value', 'option1')
        cy.get('input[type="checkbox"]').check(['option2','option3']).should('be.checked').and('have.value','option2','option3')


    })

    it(' All Checkbox checked in cypress',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('input[type="checkbox"]').as('checkboxes').check()

        cy.get('@checkboxes')
                .each(checkbox => {
                    expect(checkbox[0].checked).to.equal(true)
                    
                })

            })


    })



