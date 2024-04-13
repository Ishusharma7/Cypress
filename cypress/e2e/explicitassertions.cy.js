describe('explicit assertions', ()=>{

    //explicit have expect and assert

    it('assertion',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='password']").type('admin123')
        cy.get("button[type='submit']").click()

        let expName='xyz';

        cy.get('.oxd-userdropdown-name').then((x)=>{
            let actName = x.text();
            //BDD style
            expect(actName).to.equal(expName)
            expect(actName).to.not.equal(expName)

            

            //TDD style
            assert.equal(actName,expName)
            assert.not.equal(actName,expName)
        })

    })
})