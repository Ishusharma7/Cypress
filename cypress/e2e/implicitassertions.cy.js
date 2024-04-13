describe('implicit assertions', ()=>{
// there are only two implicit assertions  1)should   2) and
    it('assertions', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('include','Orange')
        .and('eq','OrangeHRM')
        .and('contain','HRM')

        cy.get('.orangehrm-login-branding > img').should('be.visible').and('exist') //logo visible or exists

        // cy.xpath("//a").should('have.length','5') //have anchor tags and are there 5 anchor tags

        cy.get("input[placeholder='Username']").type("Admin")  

        cy.get("input[placeholder='Username']").should('have.value','Admin') //is value = adminn
    })

    // also have   eq,contain,include,have.value,exists,have.length just add not.anything and they will become negative ex not.eq 
})