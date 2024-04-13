const { each } = require("cypress/types/bluebird")
 
describe('dropdowns',()=>{

    // you can use it.skip to skip an it block from executing

    it('select',()=>{
        cy.visit('https://dummyticket.travel/buy_ticket/')
        cy.get('#porpose')
        .select("Visa Submission/Application")
        .should('have.value','Visa Submission/Application')
    })

    it('without select',()=>{
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('India').type('{enter}')
        cy.get('#select2-billing_country-container').should('have.text','India')
    }) 

    it('auto suggestion dropdown', ()=>{           //auto suggestion is static in nature
        cy.visit('https://www.wikipedia.org/')
        cy.get('#searchInput').type('Delhi')
        cy.get('.suggestion-title').contains('Delhi Sultanate').click()
    })

    //for practice you can make dynamic dropdowns like google.com
    

    //  for dynamic dropdowns we do not use should have.value but each 
    //     .each(($el,index,$list)=>{
    //         if($el.text() == "expected value"){
    //             cy.wrap($el).click()
    //         }
    //     })
    //     $el is elements     $list is telling its an Array
    //     wrap is used as we have to wrap the element to be able to use cypress commands on it
})