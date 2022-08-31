describe('test suite', function(){
    it('test case1',function(){
        // cy.visit("https://rahulshettyacademy.com/angularpractice/")
        
        // cy.get('form div:nth-child(8) input').shadow()
                
        cy.visit('http://books-pwakit.appspot.com/')
        cy.get('book-app') //1
        .shadow() //2
        .find('app-header') //3
        .find('.toolbar-bottom') //4
        .find('book-input-decorator') //5
        .find('#input') //6
        .type('Science')
        .click()
        .url('contains', 'explore?q=Science')
    })

    it('test case2',function(){
     
            cy.visit('https://qaboxletstestcypresspracticesite.netlify.app/')
            cy.get('.ltl > :nth-child(2) > a').click({force:true})
            cy.get('button').click()
            cy.get('#shadowHost')
                .shadow()
                    .find('h2').should('have.text','I belong to Shadow DOM')
                        
       
    })

    it('test case2',function(){
     
        cy.visit('https://qaboxletstestcypresspracticesite.netlify.app/')
        cy.get('.ltl > :nth-child(2) > a').click({force:true})
        cy.get('button').click()
        cy.get('#shadowHost')
            .shadow()

            .find('input#name').type('Here comes the shadow DOM')
   
})

    it.skip('test case3',function(){
        
        cy.visit('https://the-internet.herokuapp.com/')
        cy.get('#content > ul > li:nth-child(38) > a').click({force:true})
        cy.get('#content > my-paragraph').eq(0)
            .shadow().find('my-paragraph > span').then(function(ele){
                const txt = ele.text()
                cy.log(txt)
            })
        

    })



})