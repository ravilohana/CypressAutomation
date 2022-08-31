

/// < reference types = "Cypress" />


import HomePage_Obj_Repo from "../../support/PageObjects/HomePage_Obj_Repo"

describe('Home Page POM Approach Suite',function(){
    it('automate home Page with Page object',function(){

        const homePage_Obj_Repo = new HomePage_Obj_Repo()

        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        homePage_Obj_Repo.getName().type('Bob')
        homePage_Obj_Repo.getEmail('bob@gmail.com')
        homePage_Obj_Repo.getPassword('bob@123')
        homePage_Obj_Repo.selectGender().select('Male')
        homePage_Obj_Repo.getCheckBoxIceCream().check().should("be.checked")
        homePage_Obj_Repo.getTwoWayBinding().should('have.value', 'Bob')
        homePage_Obj_Repo.getSubmitBtn().click()
        homePage_Obj_Repo.getSuccessMsg().then(function(ele){

                cy.log(ele.text())
                const successMessage = ele.text();
                expect(successMessage).include('Success! The Form has been submitted successfully!.')

             })
        })
})