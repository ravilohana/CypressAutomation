

// Data driven Testing in cypress 
// we use cypress hook now onwards
// fetch the data form external source




 //import testData from "../../fixtures/rahul_shetty_angular_form.json"

// testData.forEach((testCase) =>{

// })  

const formData = require("../../fixtures/rahul_shetty_angular_form.json")

describe('Test SUite',function(){

    // before(function()
    // {
        
    // })


    it('Multiple set of data',function(){

        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.fixture('rahul_shetty_angular_form').then((testData) =>
        {
            testData.forEach((data) => {
                const form_name  = data.name
                const form_email = data.email
                const form_gender = data.gender
                const form_pwd = data.password


                cy.get('input[name="name"]:nth-child(2)').type(form_name)
                cy.get('input[name="email"]').type(form_email)
                cy.get('#exampleInputPassword1').type(form_pwd)
                cy.get('#exampleFormControlSelect1').select(form_gender)
                cy.reload()

            })
          
        })

        
       //  cy.get('input[name="name"]:nth-child(2)').type(form_name)
        // cy.get('input[name="email"]').type(this.testData.email)
        // cy.get('#exampleInputPassword1').type(this.testData.password)
        // cy.get('#exampleFormControlSelect1').select(this.testData.gender)

    })
})
