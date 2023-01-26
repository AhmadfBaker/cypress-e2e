/// <reference types="cypress" />

describe('tables', () => {

    beforeEach(() => {


        cy.visit("http://localhost:4200/pages/")
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()
        cy.get('.sidebar-toggle').click()
        cy.fixture('example.json').as('data')
    })

    it('verify overall rows count', () => {
        // 6 pages 
        // Need a variables to save the rows count
        // use for loop to move between pages (6 pages)
        // get table > find(tbody tr).then((rows) => {
        //definedVar += rows.length

        //if(n ==5)
        // make sure that the next button is disabled
        // expect length = 60

        //else 
        // click next

    })

})

