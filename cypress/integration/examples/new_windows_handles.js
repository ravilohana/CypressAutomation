
// Handle open new window  in Cypress

/// <reference types = "Cypress" />

describe('Open new window handles in Cypress Demo',function(){
    it('New Windows handling in cypress assert with title of the page', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        const pop_url = "http://www.qaclickacademy.com/"
        cy.window().then( (win) =>{
            const myStub = cy.stub(win , 'open').as('newWindowOpen');
        })
        cy.get('#openwindow').click();
        cy.get('@newWindowOpen').should('be.calledWith', pop_url)
        cy.window().then(win => {
            win.location.href = pop_url
           // cy.get('input#search').type('Cypress by qa box lets test{enter}')
           cy.title().should("equal","QA Click Academy | Selenium,Jmeter,SoapUI,Appium,Database testing,QA Training Academy");
           cy.url().should('include','qaclickacademy.com')

        //    expect(newwindowTitle).to.equal('QA Click Academy | Selenium,Jmeter,SoapUI,Appium,Database testing,QA Training Academy')
            
        })

    })

    it.only('New window  handling in cypress assert with url of the page', function(){
        cy.on('uncaught:exception', (err, runnable) => { 
            return false
          });
        const pop_url = "https://www.globalsqa.com/demo-site/frames-and-windows/#"
        const pop_url1 = "https://www.google.com"
        cy.visit("https://www.globalsqa.com/demo-site/frames-and-windows/")
        cy.get('.resp-tabs-list > li:nth-child(2)').click();
        cy.window().then( (win) =>{
            const myStub = cy.stub(win,'open').as('newWindowOpen');
        })
        cy.get('[rel-title="Open New Window"] > a').click();

        cy.window().then((win) =>{
            win.location.href = pop_url1;
          //  cy.url().should('include','frames-and-windows');
            cy.url().should('include','google');
        })

       

    })
})