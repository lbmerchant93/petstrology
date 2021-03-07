describe('Dashboard UI', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })

    it('Should be able to visit the page and render the title', () => {
        cy.get('header').contains('Petstrology').should('be.visible')
    })

    it('Should have a link to the Find Your Sign page in the header', () => {
        cy.get('header .saved-signs-link')
            .click()
        cy.url().should('include', 'FindYourSigns')
    })

    it('Should have a section containing all 12 of the astrological signs links', () => {
        cy.get('.all-star-signs-main a').should('have.length', '12')
    })

    it('Should be taken to the Horoscope page by clicking a sign link', () => {
        cy.get('.all-star-signs').first()
            .click()
        cy.url().should('include', 'Horoscope/capricorn')
    })

    it('Should have a sign title and image in the sign link', () => {
        cy.get('.all-star-signs').eq(0).contains('CAPRICORN')
        cy.get('.sign-img').eq(0).should('have.attr', 'alt', 'capricorn')
    })
})