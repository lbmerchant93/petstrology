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

    it('Should have an image and sign title', () => {
        cy.get('img').should('have.attr', 'alt', 'capricorn')
        cy.get('.horoscope-sign-title').contains('CAPRICORN')
    })

    it('Should have the details of today\'s horoscope', () => {
        cy.get('.days-date').contains('March 1, 2021')
        cy.get('.date-range').contains('Jan 20 - Feb 18')
        cy.get('.days-color').contains('Blue')
        cy.get('.days-compatibility').contains('Taurus')
        cy.get('.days-lucky-numbers').contains('93')
        cy.get('.days-lucky-time').contains('6pm')
        cy.get('.days-mood').contains('Relieved')
        cy.get('.days-description').contains('Your busy lifestyle has been fun, but today it\'s time to slow down and just relax.')

    })

})