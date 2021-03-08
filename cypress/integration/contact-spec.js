describe('Dashboard UI', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
        cy.get('.footer-link').eq(1).click();
    })

    it('Should tell you what page you are on', () => {
        cy.get('.contact-title').contains('CONTACT THE DEVELOPER')
    })

    it('Should have an image for the developer', () => {
        cy.get('img').should('have.attr', 'alt', 'Lucas Github Picture')
    })

    it('Should have a link to Lucas\' github profile', () => {
        cy.get('.github-profile-link').should('have.attr', 'href', 'https://github.com/lbmerchant93')
    })

    it('Should have a link to Lucas\' LinkedIn profile', () => {
        cy.get('.linkedin-profile-link').should('have.attr', 'href', 'https://www.linkedin.com/in/lucas-merchant93/')
    })
})