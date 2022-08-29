

// Data driven Testing in cypress 
// we use cypress hook now onwards
// fetch the data form external source



describe('Data Driven Suite',function(){

    before(function(){
        cy.fixture("example").then(function(data){
            this.data = data
        })
    })



    it('Rahul Shetty Angular apps form',function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        cy.get('input[name="email"]').type(this.data.email)
        cy.get('#exampleInputPassword1').type(this.data.password)
      //  cy.get('#exampleCheck1').check();
       // cy.get('input[name=bday]').type("10-02-1980")
        cy.get('#exampleFormControlSelect1').select(this.data.gender)

        cy.get('h4 > input').should('have.value',this.data.name)
        cy.get('input[name="name"]:nth-child(2)').should('have.attr',"minlength",'2')
        cy.get('#inlineRadio3').should('be.disabled')
        cy.get('.navbar-nav > li:nth-child(2)').click();

        

        // here we selecting the single product
        // cy.selectProductName('Nokia')
        // cy.selectProductName('Blackberry')


        // here we are taking product from the json file 

        // this.data.productName.forEach(function(element){
        //     cy.selectProductName(element)
        // })




        

        // cy.get('#navbarResponsive > ul > li').click()
        // cy.get('.btn.btn-success').click()
        // cy.get('#country').type("India")
        // cy.wait(6000)
        // cy.get('.suggestions').click()
        // cy.get('#checkbox2').check({force:true}).should('be.checked')
        // cy.get('form > input').click()
        // cy.get('.alert.alert-success.alert-dismissible > strong').should('have.text','Success!')
        // cy.get('.alert.alert-success.alert-dismissible').then(function(ele){

        //     cy.log(ele.text())
        //     const successMessage = ele.text();
        //     expect(successMessage).include('Thank you! Your order will be delivered in next few weeks')
        // })



    })
})


// describe('' ,() =>{
//     it('', () => {

//     })
// })