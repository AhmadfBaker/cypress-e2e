/// <reference types="cypress" />


describe('visit ngx project', () => {

    beforeEach(() => {
        cy.visit('http://localhost:4200/')
        cy.contains('Modal & Overlays').click()
        cy.contains('Window').click()
        cy.get(':nth-child(1) > nb-card > nb-card-body > :nth-child(1)').click()
       
        //cy.fixture('example').as('data')
//cy.wait(2000)
    })
    // verify page title
it.only('TestCase1', () => {

    cy.get('#text').click().type('17263987126378216129u4921u49021u49012490128490214i;wqhdoiwhdiowhdiowhdio23heo23ur823yrp892y3pr', {delay : 0})


})
    it('Performance : Verify Layout & stepper actions performance is within 2000 ms', () => {
        cy.get('.menu-items').contains('Layout').click()
        cy.get('.menu-items').contains('Stepper').click()
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
    
   

    // it('test-case#2', () => {
    //     cy.title().should('eq', 'ngx-admin Demo Application')
    // })


    // it('test-case#3', () => {
    //      cy.title().should('eq', 'ngx-admin Demo Application')
    // })



    // cy.visit("http://localhost:4200/pages/")
    // cy.contains('Tables & Data').click()
    // cy.contains('Smart Table').click()
    // cy.get('.sidebar-toggle').click()
    // cy.fixture('example').as('data')

})