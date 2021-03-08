describe('Dashboard UI', () => {
    beforeEach(() => {
        cy.fixture('testHoroscope.json')
            .then((testHoroscope) => {cy.intercept('POST', 'https://aztro.sameerkumar.website/?sign=capricorn&day=today', {
                statusCode: 200,
                body: testHoroscope.horoscopeToday
            })})

        cy.visit('http://localhost:3000');
        cy.get('header .saved-signs-link')
            .click()
    })

    it('Should have an input you can enter a name and date', () => {
        cy.get('.name-input').type('Lucas')
        cy.get('.name-input').should('have.attr', 'value', 'Lucas')
        cy.get('.date-input').type('2021-01-01')
        cy.get('.date-input').should('have.attr', 'value', '2021-01-01')
    })
})