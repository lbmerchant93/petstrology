describe('Dashboard UI', () => {
    beforeEach(() => {
        cy.fixture('testHoroscope.json')
            .then((testHoroscope) => {cy.intercept('POST', 'https://aztro.sameerkumar.website/?sign=capricorn&day=today', {
                statusCode: 200,
                body: testHoroscope.horoscopeToday
            })})

        cy.visit('http://localhost:3000');
        cy.get('.all-star-signs').first()
            .click()
    })

    it('Should have a link back to the dashboard in the header', () => {
        cy.get('header .home-link')
            .click()
        cy.url().should('equal', 'http://localhost:3000/')
    })

})