describe('login suite', () => {
    it('login test', () => {
        cy.visit('http://react-redux.realworld.io/#/login?_k=fe04zc')
        cy.get('input[type="email"]').type("sarath@gmail.com")
        cy.get('input[type="password"]').type("1111")
        cy.get("button").click()
        cy.contains("No articles are here... yet.").should('be.visible')
    })
})