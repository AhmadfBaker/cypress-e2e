/// <reference types="cypress" />

import { text } from "stream/consumers";
import { Forms } from "./forms-modules.cy";

let forms: Forms

describe('forms', () => {

  before(() => {
    forms = new Forms()
  })

  beforeEach(() => {
    // go to page
    cy.visit('http://localhost:4200/pages/forms/layouts')

    //pull data
    cy.fixture('example').as('data')
  })

  // verify inline form
  it('visit inline form', () => {
    forms.getCard('Inline form').within(() => {
      cy.get('@data').then((dummydata: any) => {
        forms.getInputElement([{ index: 0, text: dummydata.name }, { index: 1, text: dummydata.email }])
        forms.checkCheckboxElement([{ index: 0, disabled: false }])
        forms.assertValue([{ index: 0, text: dummydata.name }, { index: 1, text: dummydata.email }])
        cy.get('form').submit()
        forms.assertButtonText('Submit')

      })
    })
  })

  // verify grid form
  it('visit using the grid', () => {
 
    forms.getCard('Using the Grid').within(() => {
      cy.get('@data').then((dummydata: any) => {
        forms.getInputElement([{ index: 0, text: dummydata.email }, { index: 1, text: dummydata.password }])
        forms.checkRadioElement([{ index: 0, disabled: false }, { index: 1, disabled: false }, { index: 2, disabled: true }])
        forms.assertValue([{ index: 0, text: dummydata.email }, { index: 1, text: dummydata.password }])
        cy.get('form').submit()
        forms.assertButtonText('Sign in')
      })
    })
  })



  it.only('visit using the grid', () => {
 
        cy.get('[data-cy="imputEmail1"]').type('123')
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > nb-card-body > form > :nth-child(4) > .offset-sm-3 > .appearance-filled').contains('Sign in').click()
  //       cy.on('window:alert',(t)=>{
  //         //assertions
  //         expect(t).to.contains('Please include an');
        
  // })
    // cy.on ('window:alert', (text) => {
    // cy.wrap(text).should('contain', 'please')
    // })
    const stub = cy.stub();
   Cypress.on('uncaught:exception', (err, runnable) => {
     expect(err.message).to.include('of undefined')

    cy.wrap(text).should('contain', 'please')
    })

  // stub('window:alert', (stub) => {
  //     expect(stub).to.contain('Please')
  // })
})
// Please include an "@" in the email address. "123" is missing an "@"
})


