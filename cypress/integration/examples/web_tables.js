
// Web tables handles in Cypress

/// <reference types = "Cypress" />

describe('Web Tables Handles in Cypress demo',function(){
    it('Web tables in Cypress',function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('table[name="courses"] > tbody >tr >td:nth-child(2)').each( ($ele,index,$list)  => {



               const courseText =  $ele.text();
               const rowNo = index
               const list_name = $list.text();
               cy.log(courseText)
               cy.log(rowNo)
               cy.log(list_name)

               if(courseText.includes('Python')){
                    cy.get('table[name="courses"] > tbody >tr >td:nth-child(2)').eq(index).next().then(function(price){
                        const priceText = price.text();
                        expect(priceText).to.equal('25')
                    })
               }
        })

    })

    it('Web tables princt content in Cypress',function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#product').find('tr').each( ($ele,index,$list) => {

            cy.log(index)
            const instructor = $ele.find('th:nth-child(1)').text()
            const course = $ele.find('th:nth-child(2)').text()
            const price = $ele.find('th:nth-child(2)').text()

            const instructor_name = $ele.find('td:nth-child(1)').text()
            const course_name = $ele.find('td:nth-child(2)').text()
            const course_price = $ele.find('td:nth-child(3)').text()
            cy.log(instructor + " | " + course + " | " + price )
            cy.log(instructor_name + " | " +  course_name  + " | " + course_price)
            // cy.log(course_name)
            // cy.log(price)


            
               if(course_name.includes('Python')){

                    const price_text = $ele.find('td:nth-child(2)').next().text()
                    cy.log(price_text)
                    expect(price_text).to.equal('25')


               }

        })

    })
})