describe('Dashboard UI', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
        cy.get('.footer-link').eq(0).click();
    })

    it('Should tell you what page you are on', () => {
        cy.get('.about-title').contains('ABOUT PAGE')
    })

    it('Should tell you Why, Getting Started, Reading Horoscopes', () => {
        cy.get('.why')
        cy.get('.start')
        cy.get('.reading-horoscope')
    })

    it('Should have a way back to the home page', () => {
        cy.get('header .home-link')
            .click()
        cy.url().should('equal', 'http://localhost:3000/')
    })

    it('Should have a way to the Find Your Signs page', () => {
        cy.get('header .saved-signs-link')
            .click()
        cy.url().should('include', 'FindYourSigns')
    })

    it('Should link you to the All Signs in the Getting started section', () => {
        cy.get('.all-link').click()
        cy.url().should('equal', 'http://localhost:3000/')
    })

    it('Should link you to the Find Your Signs in the Getting started section', () => {
        cy.get('.find-link').click()
        cy.url().should('equal', 'http://localhost:3000/FindYourSigns')
    })
})