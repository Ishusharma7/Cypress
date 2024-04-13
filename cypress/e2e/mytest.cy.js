describe('my test', () =>{

  it('test1', ()=>{
    //steps
    cy.visit("https://www.google.com/imghp?hl=en&tab=ri&authuser=0&ogbl")
    cy.title().should('eq','Google Images')
    // expect(true).to.equal(true)
  })

  it('test2', ()=>{
    //steps
    cy.visit("https://www.google.com/imghp?hl=en&tab=ri&authuser=0&ogbl")
    cy.title().should('eq','Google Ima')
    // expect(true).to.equal(true)
  })



})