


class HomePage_Obj_Repo
{
    getName(){
        return cy.get('input[name="name"]:nth-child(2)')
    }

    getEmail(){
        return cy.get('input[name="email"]')
    }
    getPassword(){
        return cy.get('#exampleInputPassword1')
    }
    selectGender(){
        return cy.get('#exampleFormControlSelect1')
    }

    getTwoWayBinding(){
        return cy.get('h4 > input')
    }
    getSubmitBtn(){
        return cy.get('input[type="submit"]')
    }

    getSuccessMsg(){
        return cy.get('.alert.alert-success.alert-dismissible')
    }
    getCheckBoxIceCream(){
        return cy.get('#exampleCheck1')
    }
}

export default HomePage_Obj_Repo

