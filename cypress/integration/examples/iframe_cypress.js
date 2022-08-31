

// iframe handles in cypress

/// <reference types = "cypress" />
/// <reference types = "cypress-iframe" />

import 'cypress-iframe'

describe('iframe handles in cypress Suite',function(){
    
    it('rahulshettyacademy iframe',function(){
       // const iframe = '#courses-iframe'
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe()
            .find('a[href="mentorship"]').eq(0)
                .should('be.visible')
                    .click()
        cy.wait(6000)
        cy.iframe()
            .find('h1[class*="pricing-title"]')
                .should('have.length',2)
       // cy.wait(6000)
        cy.iframe()
            .find('.inner-box > h1')
                .should('have.text','Mentorship')

    })


    it('the-internet.herokuapp iframe',function(){
       
         cy.visit('https://the-internet.herokuapp.com/frames')
         cy.get('a[href="/iframe"]').should('be.visible').click()
         cy.wait(6000)
         cy.frameLoaded('#mce_0_ifr')
        
         cy.iframe()
            cy.wait(10000)
             .find('body#tinymce')
                .clear()
                    .type("Hi, I am ravi , Learning Cypress Automation")
         
 
     })


     it.skip('globalsqa iframe',function(){

        cy.on('uncaught:exception', (err, runnable) => { 
            return false
          });
       
        cy.visit('https://www.globalsqa.com/demo-site/frames-and-windows/')
        cy.get('#iFrame').should('be.visible').click()
        cy.wait(6000)
        cy.frameLoaded('iframe[name="globalSqa"]')
       
        cy.iframe()
           cy.wait(10000)
            .find('#portfolio_items >div:nth-child(5)').click()
               
        

    })



})
       


        // it.only('rahulshettyacademy',function(){
        //     cy.visit('https://rahulshettyacademy.com/mentorship')
    
        //    cy.get('h1[class*="pricing-title"]').should('have.length' , 2)
        //    cy.get('.inner-box >h1').then(function(txt){
        //        const text_h1 =  txt.text();
        //        expect(text_h1).to.contains('Mentorship')
        //        cy.log(text_h1)
        //     })

        //     })
        
        
    
    
