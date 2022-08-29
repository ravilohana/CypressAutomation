
/// <reference types ="Cypress"/>
describe('My First Test Suite', function(){


    it('My First test case',function(){
       // cy.visit("https://demo.opencart.com/")
       cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
       cy.get('.search-keyword').type('ca')
       cy.wait(2000)

       
       cy.get('.product').should('have.length',5)

       // Here we use jquery selector , :visible meams that only visible element will be fetched form the DOM
       cy.get('.product:visible').should('have.length',4)
       // Parent child chaining
       cy.get('.products').find('.product').should('have.length',4)

        
        // Here we use contains() method within in the scope

      // cy.get('.products').find('.product').eq(1).contains("ADD TO CART").click()

      // Here we use get() to locate the element within the scope

     //  cy.get('.products').find('.product').eq(1).get('div.products > div:nth-child(2) > div.product-action button[type="button"]').click()

     // Here we directly locate the element which needs to be clicked 

       cy.get('div.products > div:nth-child(2) > div.product-action button[type="button"]').click()

       cy.get('.products').find('.product').each(($e1, index, Slist) => {

          const productNameText =  $e1.find('.product-name').text()
          cy.log("Product Name: " , productNameText)
          console.log("Product Name: " , productNameText)
          if(productNameText.includes('Cashews')){
              cy.wrap($e1.find('.increment')).click()
              cy.wrap($e1.find('.increment')).click()
              cy.wrap($e1.find('button')).click()
          }

       })




      //  cy.get('.cart-icon').click()
  
      //  cy.get('.cart-preview > div.action-block > button').click()

      cy.get('.brand.greenLogo').then(function(ele){
        cy.log(ele.text())
      })
     // cy.log(logoText)

     cy.get('.brand.greenLogo').as('logo')
     cy.get('@logo').then(function(ele){
      cy.log(ele.text())
    })
       
    })
})