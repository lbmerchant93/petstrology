describe('Dashboard UI', () => {
    beforeEach(() => {
        cy.fixture('testHoroscope.json')
            .then((testHoroscope) => {cy.intercept('POST', 'https://aztro.sameerkumar.website/?sign=capricorn&day=today', {
                statusCode: 200,
                body: testHoroscope.horoscopeToday
            })})

        cy.fixture('testHoroscope.json')
        .then((testHoroscope) => {cy.intercept('POST', 'https://aztro.sameerkumar.website/?sign=capricorn&day=yesterday', {
            statusCode: 200,
            body: testHoroscope.horoscopeYesterday
        })})

        cy.fixture('testHoroscope.json')
        .then((testHoroscope) => {cy.intercept('POST', 'https://aztro.sameerkumar.website/?sign=capricorn&day=tomorrow', {
            statusCode: 200,
            body: testHoroscope.horoscopeTomorrow
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

    it('Should have a button to display yesterday\'s horoscope', () => {
        cy.get('.yesterday')
            .click()
            cy.get('.days-date').contains('February 28, 2021')
            cy.get('.date-range').contains('Jan 20 - Feb 18')
            cy.get('.days-color').contains('Black')
            cy.get('.days-compatibility').contains('Aquarius')
            cy.get('.days-lucky-numbers').contains('25')
            cy.get('.days-lucky-time').contains('2pm')
            cy.get('.days-mood').contains('Excited')
            cy.get('.days-description').contains('All of your hard work is starting to show. Take some time to enjoy the fruits of your labor.')    
    })

    it('Should have a button to display tomorrow\'s horoscope', () => {
        cy.get('.tomorrow')
            .click()
            cy.get('.days-date').contains('March 2, 2021')
            cy.get('.date-range').contains('Jan 20 - Feb 18')
            cy.get('.days-color').contains('Green')
            cy.get('.days-compatibility').contains('Gemini')
            cy.get('.days-lucky-numbers').contains('7')
            cy.get('.days-lucky-time').contains('9am')
            cy.get('.days-mood').contains('Sluggish')
            cy.get('.days-description').contains('Take today to enjoy a slower pace. Others may seem to be getting ahead of you but you should lay low today.')    
    })

    it('Should have the details of today\'s horoscope when clicking the today button if on another date already', () => {
        cy.get('.yesterday')
            .click()
        cy.get('.today')
            .click()
        cy.get('.days-date').contains('March 1, 2021')
        cy.get('.date-range').contains('Jan 20 - Feb 18')
        cy.get('.days-color').contains('Blue')
        cy.get('.days-compatibility').contains('Taurus')
        cy.get('.days-lucky-numbers').contains('93')
        cy.get('.days-lucky-time').contains('6pm')
        cy.get('.days-mood').contains('Relieved')
        cy.get('.days-description').contains('Your busy lifestyle has been fun, but today it\'s time to slow down and just relax.')
    })

    it('Should not have the today button visible when on today\'s horoscope', () => {
        cy.get('.today').should('not.exist')
    })

    it('Should not have the yesterday button visible when on yesterday\'s horoscope', () => {
        cy.get('.yesterday').click()
        cy.get('.yesterday').should('not.exist')
    })

    it('Should not have the tomorrow button visible when on tomorrow\'s horoscope', () => {
        cy.get('.tomorrow').click()
        cy.get('.tomorrow').should('not.exist')
    })

})