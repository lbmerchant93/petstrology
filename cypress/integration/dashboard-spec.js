describe('Dashboard UI', () => {
    beforeEach(() => {
        cy.fixture('testHoroscope.json')
            .then((testHoroscope) => {cy.intercept('POST', 'https://aztro.sameerkumar.website/?sign=capricorn&day=today', {
                statusCode: 200,
                body: testHoroscope.horoscopeToday
            })})

        cy.visit('http://localhost:3000');
    })

    it('Should be able to visit the page and render the title', () => {
        cy.get('header').contains('Petstrology').should('be.visible')
    })

    it('Should not have a link to view all signs', () => {
        cy.get('.home-link').should('not.exist')
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

    it('Should have a link to the About page', () => {
        cy.get('.footer-link').eq(0).click();
        cy.url().should('equal', 'http://localhost:3000/About')
    })

    it('Should have a link to the Contact page', () => {
        cy.get('.footer-link').eq(1).click();
        cy.url().should('equal', 'http://localhost:3000/Contact')
    })
})
