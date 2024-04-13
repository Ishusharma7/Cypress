describe('my test',() =>{

    it('csslocators', ()=>{

        cy.visit("https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_7hz2t19t5c_e&adgrpid=155259815513&hvpone=&hvptwo=&hvadid=676742245123&hvpos=&hvnetw=g&hvrand=4390162090736644256&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007800&hvtargid=kwd-10573980&hydadcr=14453_2367553&gad_source=1")
        cy.get('#twotabsearchtextbox').type("T-shirts")
        cy.get('#nav-search-submit-button').click()
        cy.get('.sg-col-inner').contains("T-shirts")     //assertion
    })
})