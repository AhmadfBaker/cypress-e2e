import {Layout} from './layout-mod.cy'

describe('Layout', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/')
        cy.get('.menu-items').contains('Layout').click()
        cy.get('.menu-items').contains('Stepper').click()
        cy.get('.sidebar-toggle').click()
    })


    it('Stepper Page should show the right content', () => {
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

    it.only('Performance : Verify Layout & stepper actions performance is within 2000 ms', () => {
        cy.get('.step-content').contains('Step content #1').should('be.visible')
        
        // performance.mark('Start');
        // cy.get('button').contains('next').click();
        // cy.get('.step-content').contains('Step content #2').should('be.visible')
        // performance.measure('End', 'Start')
        // performance.getEntries()
        // console.log(performance.getEntriesByName('End')[0].duration);

        cy.window().its('performance').invoke('mark', 'start')
        cy.get('button').contains('next').click();
        cy.get('.step-content').contains('Step content #2').should('be.visible')
        cy.window().its('performance').invoke('measure', 'end', 'start').its('duration').should('be.lessThan', 2000).log('**Performance between Next Click and Load Page 1**')

        cy.get('.step-content').contains('Step content #2').should('be.visible')
        cy.window().its('performance').invoke('mark', 'start')
        cy.get('button').contains('next').click();
        cy.get('.step-content').contains('Step content #3').should('be.visible')
        cy.window().its('performance').invoke('measure', 'end', 'start').its('duration').should('be.lessThan', 2000).log('**Performance between Next Click and Load Page 2**').then(($performance) => {
            // $option is yielded
          })
       
    })

})

