// alert Handle by Cypress

/// <reference types = "Cypress"/>

describe('Alert in cypress Demo Suite', function(){
    it('windows alert Handle  and get the text of window alert box in Cypress',function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#alertbtn').click();

        cy.on('window:alert',(windowAlertText)=>{
                //Mocha 
                // here we compare the string of the window alert
                expect(windowAlertText).to.equal("Hello , share this practice page and share your knowledge");
        })

   
    })

    it('windows confirm box Handle and get the text of window confirm box in Cypress',function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#confirmbtn').click()

        cy.on('window:confirm',(windowConfirmText)=>{
            //Mocha 
            // here we compare the string of the window conform box
            expect(windowConfirmText).to.equal("Hello , Are you sure you want to confirm?");
    })

        cy.on('window:confirm',(windowConfirmText)=>{
            //Mocha 
            // here we compare the string of the window conform box
            expect(windowConfirmText).to.equal("Hello , Are you sure you want to confirm?");
            return false;
    })
    })
})

   
describe('Windoe alerts ins cypress Demo2 Suite',function(){
     //Alert windows
    it("windows alert test case in cypress",function(){

        cy.visit("https://kitchen.applitools.com/ingredients/alert");
        cy.get('#alert-button').click();
        cy.on("window:alert", (windowAlertText)=>{
            //Mocha
            expect(windowAlertText).to.equal("Airfryers can make anything!");
        })
    })
    // Confirmation alert window click on OK button
    it("windows Confirm box and click on 'OK' button and get text test case in cypress",function(){

        cy.visit("https://kitchen.applitools.com/ingredients/alert");
        cy.get('#confirm-button').click();
        cy.on("window:confirm", (windowAlertConfirmText)=>{
            //Mocha
            expect(windowAlertConfirmText).to.equal("Proceed with adding garlic?");
        })

        cy.get("#confirm-answer").contains('Answer: Yes').should('contain',"Yes")
    })

     // Confirmation alert window click on Cancel button
    it("windows Confirm box and click on 'Cancel' button and get text test case in cypress",function(){

        cy.visit("https://kitchen.applitools.com/ingredients/alert");
        cy.get('#confirm-button').click();
        cy.on("window:confirm", (windowAlertConfirmText)=>{
            //Mocha
            expect(windowAlertConfirmText).to.equal("Proceed with adding garlic?");
            return false;
        })
        cy.get("#confirm-answer").contains('Answer: No').should('contain',"No")
    })
     // Prompt alert window click on OK button
    it("windows Prompt box and click on 'OK' button after entering text, test case in cypress",function(){

        cy.visit("https://kitchen.applitools.com/ingredients/alert");
        cy.window().then(win =>{
            cy.stub(win,'prompt').returns('Today is Monday!')
            cy.get('#prompt-button').click();
        })
        
        
        cy.get("#prompt-answer").contains('Answer: Today is Monday!').should('contain',"Today is Monday!")
    })
     // Confirmation alert window click on Cancel button
    it("windows Prompt box and click on 'Cancel' button after entering text, test case in cypress",function(){

        cy.visit("https://kitchen.applitools.com/ingredients/alert");
        cy.window().then(win =>{
            cy.stub(win,'prompt').callsFake(()=> null);    
            cy.get('#prompt-button').click();
        })
       
        
        cy.get("#prompt-answer").contains('Answer: Cancelled').should('contain',"Cancelled")
    })
})