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

    it('Should have a place holder text for when there are no searches yet and the searched signs shouldn\'t be visible', () => {
        cy.get('.none-saved').contains('No dates saved yet! Fill out the form above to save your loved one\'s dates!')
        cy.get('.saved-signs').should('not.exist')
    })

    it('Should not be able to submit inputs until both inputs are filled out', () => {
        cy.get('.disabled').should('have.attr', 'disabled', 'disabled')
        cy.get('.name-input').type('Lucas')
        cy.get('.name-input').should('have.attr', 'value', 'Lucas')
        cy.get('.disabled').should('have.attr', 'disabled', 'disabled')
        cy.get('.date-input').type('2021-01-01')
        cy.get('.date-input').should('have.attr', 'value', '2021-01-01')
        cy.get('.submit').should('not.have.attr', 'disabled')
    })

})