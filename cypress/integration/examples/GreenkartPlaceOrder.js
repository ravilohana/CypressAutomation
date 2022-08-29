describe('Greenkart Place Order Suite',function(){
    it('Add a product and place it',function(){

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('input.search-keyword').type('ca')
        cy.get('.products').find('.product').each(($e1,index,$list)=> {

            const productNameText =  $e1.find('.product-name').text()
            cy.log("Product Name: " , productNameText)
            console.log("Product Name: " , productNameText)
                    if(productNameText.includes('Cashews')){
                    cy.wrap($e1.find('.increment')).click()
                    cy.wrap($e1.find('.increment')).click()
                    cy.wrap($e1.find('button')).click()
                }
                
        })

        cy.get('.cart-icon').click()
  
        cy.get('.cart-preview > div.action-block > button').click()
        cy.get('div.products > div > button').click()

    })
})