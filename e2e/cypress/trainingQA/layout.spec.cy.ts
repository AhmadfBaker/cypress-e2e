import {Layout} from './layout-mod.cy'

describe('Layout', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/')
        cy.get('.menu-items').contains('Layout').click()
        cy.get('.menu-items').contains('Stepper').click()
        cy.get('.sidebar-toggle').click()
    })


    it.only('Stepper Page should show the right content', () => {
        //cy.get('.ng-star-inserted').contains('Step content #1')
        Layout.getLayout()
        cy.get('button[type=submit]').eq(1).click({ force: true })
        cy.get('.ng-star-inserted').contains('Step content #2')

    })

    it('Fill information', () => {

        const names = ["Ahmad", "Avengers", "somethingElse"]
        for(let n = 0; n < names.length; n++){
            let text = names[n]
                cy.get('.input-group').type(text)
                cy.get('button[type=submit]').eq(2).click({force:true})
        }
        // cy.get('.step-content').should('contains', 'Wizard completed!')

        cy.get('.step-content').contains('Wizard completed!')
    })

})

