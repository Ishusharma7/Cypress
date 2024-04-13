describe('radio and checkbox',()=>{

    //making like this cause not havea website


    it('radio',()=>{
        cy.visit("url here")
        cy.get('radio button class').check().shouls('be.checked')
        cy.get('radio button class').uncheck().shouls('not.be.checked')
    })

    it('check box', ()=>{
        cy.visit("url here")
        cy.get('class').check().should('be.checked')
        cy.get('class').uncheck().should('not.be.checked')

        //checking all check boxes 
        cy.get('main checkbox class or parent class').check().should('be.checked')
        
        //checking first and last
        cy.get('class').first().check().should('be.checked')
        cy.get('class').last().check().should('be.checked')
    })
})