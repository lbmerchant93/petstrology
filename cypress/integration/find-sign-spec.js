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

    it('Should have a way to get back to all signs', () => {
        cy.get('header .home-link')
            .click()
        cy.url().should('equal', 'http://localhost:3000/')
    })

    it('Shouldn\'t have a link to Find Your Signs when on that page', () => {
        cy.get('header .saved-signs-link').should('not.exist')
    })

    it('Should have section to Find Your Sign containing inputs you can enter a name and date', () => {
        cy.get('.find-title').contains('FIND YOUR SIGN')
        cy.get('.name-input').type('Lucas')
        cy.get('.name-input').should('have.attr', 'value', 'Lucas')
        cy.get('.date-input').type('2021-01-01')
        cy.get('.date-input').should('have.attr', 'value', '2021-01-01')
    })

    it('Should have a section for Your Searched Signs and a placeholder text for when there are no searches yet and the searched signs shouldn\'t be visible', () => {
        cy.get('.saved-search-title').contains('YOUR SEARCHED SIGNS')
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

    it('Should display your inputs when submitted in place of the placeholder message', () => {
        cy.get('.name-input').type('Lucas')
        cy.get('.date-input').type('2021-01-01')
        cy.get('.submit').click()
        cy.get('.none-saved').should('not.exist')
        cy.get('.saved-instance .name').contains('Lucas')
        cy.get('.saved-instance .sign').contains('Capricorn')
        cy.get('.saved-instance .birth-date').contains('January 1st')
    })

    it('Should hold more than one saved instance when there are multiple inputs entered', () => {
        cy.get('.name-input').type('Lucas')
        cy.get('.date-input').type('2021-01-01')
        cy.get('.submit').click()
        cy.get('.name-input').type('Narara')
        cy.get('.date-input').type('2021-02-01')
        cy.get('.submit').click()
        cy.get('.name-input').type('Kai')
        cy.get('.date-input').type('2021-03-01')
        cy.get('.submit').click()
        cy.get('.saved-instance').should('have.length', '3')
    })

    it('Should be able to remove an instance when the remove button is clicked', () => {
        cy.get('.name-input').type('Lucas')
        cy.get('.date-input').type('2021-01-01')
        cy.get('.submit').click()
        cy.get('.name-input').type('Narara')
        cy.get('.date-input').type('2021-02-01')
        cy.get('.submit').click()
        cy.get('.saved-instance').should('have.length', '2')
        cy.get('.saved-instance').eq(0).contains('Lucas')
        cy.get('.saved-instance').eq(1).contains('Narara')
        cy.get('.saved-instance .remove-saved-sign').eq(0).click()
        cy.get('.saved-instance').should('have.length', '1')
        cy.get('.saved-instance').eq(0).contains('Narara')
    })

})