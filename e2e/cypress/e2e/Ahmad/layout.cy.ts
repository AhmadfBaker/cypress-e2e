import { NbClickTriggerStrategy } from "@nebular/theme"
import { first } from "rxjs"

//Test Scenario 
describe('ngx test cases', () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/")
        cy.get('.menu-items').contains('Modal & Overlays').click()
        cy.get('.menu-items').contains('Dialog').click()
        cy.get('g[data-name=menu-2]').click()
    })

    //Test Cases
    it('TestCase-1', () => {
        
      
        cy.get('.step-content').contains('Step content #1').should('be.visible')
        cy.get('button[type=submit]').eq(1).click()
        cy.get('.step-content').contains('Step content #2').should('be.visible')

         
                for(let i=0; i<2; i++){
                 cy.get('.step-content').contains('Step Content #3').then((fun) =>{
                cy.get('button[type=submit]').eq(0).click()
                cy.get('.step-content').should('contain')
                
            })
        }
    })


    it.only('TestCAse-3', () => {
        const names = ["Ahmad", "Mohammad","Ahmad1", "Mohammad1","Ahmad2", "Mohammad2"]
        //var count = 0
        for (let n = 0; n < 6; n++) {
           //cy.writeFile('cypress/fixtures/Ahmad.csv', ages)
           // cy.wrap(names).each((name: string) => {
            cy.get('nb-card > nb-card-body').contains('Enter Name').click()
            // cy.get('input[placeholder=Name]').clear().type(name +"")
            cy.get('input[placeholder=Name]').clear().type(names[n])

     
            cy.get('nb-card-footer').contains('Submit').click()
            cy.get('.result-from-dialog > ul > :nth-child(1)').should('contain', name)
                // if (name == 'Mohammad1'){
                //      cy.get('.result-from-dialog > ul > :nth-child(4)').should('contain', name)
                // }
        
          // })
        }
       })




       


})
