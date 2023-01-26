/// <reference types="cypress" />


describe('forms', () => {

  beforeEach(() => {
    // go to page
    cy.visit('https://cabibs.dev.pcnc2000.com:8444/#/')

    cy.wait(7000)

    //pull data
    //cy.fixture('example').as('data')
  })

    //it('returns font', function () {
      it('returns JSON', () => {
        cy.request('https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Me5WZLCzYlKw.ttf ')
          .its('headers')
          .its('content-type')
          .should('include', 'font/ttf')
      //})
})
it.only('Increments on button press', ()=>{
    cy.get('flt-semantics-placeholder').click({force:true})
    // cy.get(`[aria-label="0"]`)
    // cy.get(`[aria-label="Increment"]`).click()
    // cy.get(`[aria-label="1"]`)
})

it('login', () => {
})

})
