/// <reference types="cypress" />

export class Layout {


    getLayout(){

        cy.get('.menu-items').contains('Stepper').click({force:true})
        cy.get('input[type=text]').click().type('Ahmad Baker', {delay:0})
        
        cy.get('g[data-name=menu-2]').click()
        cy.get('g[data-name=menu-2]').click()
        cy.get('.step-container').contains('next').click()
        //cy.get('svg[fill=currentColor]').should('be.visible')
        cy.get(':nth-child(1) > nb-card > nb-card-body > .horizontal > .header > :nth-child(1) > .label-index').should('be.visible')


    }

}

//export const layout = new Layout()