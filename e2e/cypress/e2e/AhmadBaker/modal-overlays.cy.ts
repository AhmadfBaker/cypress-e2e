/// <reference types="cypress" />

// Test Scenario
describe('Modal & Overlays', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/')
        cy.get('.menu-items').contains('Modal & Overlays').click()
        cy.get('.menu-items').contains('Dialog').click()
    })
    //Test Case
    it('Return Result From Dialog', () => {
        const names = ["Amad", "Mohammad", "Mahdi", "Dagher", "Rami"]
        const x = [name]
        for (let n = 1; n < 5; n++) {
            cy.get('nb-card > nb-card-body').contains('Enter Name').click()
            cy.get('input[placeholder=Name]').type(names[n])
            cy.get('nb-card-footer').contains('Submit').click()
            //cy.get('.result-from-dialog > ul > :nth-child(1)').should('contain', name)
            // for (let y = 0 ; y < 5; y++){
                const x = cy.get(`.result-from-dialog > ul > :nth-child(${n})`)
            
                if ( x[n] = names[n]) {
                    cy.log('Names Equal to ' + names[n])
    
                }
            // }
            // length = n;
            // n = length++;
            // let y = names[n];

            // if (length = n) {
            //     cy.log(names[n])

            // }

        }





    })



})
