/// <reference types="cypress" />

// Test Scenario
describe('Layout module', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/')
        cy.get('.menu-items').contains('Layout').click()
        cy.get('.menu-items').contains('Stepper').click()
    })
    //Test Case
    it('Stepper page', () => {
        cy.get('g[data-name=menu-2]').click()
        cy.get('.horizontal > .step-content > h3.ng-star-inserted').contains('Step content #1').should('be.visible')
    })

    it('Verify Step Content #2 is shown when click next', () => {
        cy.get('button[type=submit]').eq(1).click()
        cy.get('g[data-name=menu-2]').click()
        cy.get('.horizontal > .step-content > h3.ng-star-inserted').contains('Step content #2').should('be.visible')
        //cy.get('.horizontal > .header > .step ng-star-inserted completed > nb-icon.ng-star-inserted')
        cy.get('.label-index > .ng-star-inserted > svg > [data-name="Layer 2"] > g > rect').should('have.class', 'completed')
        // cy.get('.completed > .label-index')
        // .should('have.attr', 'nb-icon')
    })

})
