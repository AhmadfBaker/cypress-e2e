/// <reference types="cypress" />

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

  it('API', () =>{
    it('requests favorite fruits', function () {
      cy.intercept('/favorite-fruits').as('fetchFruits')
      cy.visit('/fruits.html')
      cy.wait('@fetchFruits').its('response.body')
        .then((fruits) => {
          cy.get('.favorite-fruits li')
            .should('have.length', fruits.length)
    
          fruits.forEach((fruit) => {
            cy.contains('.favorite-fruits li', fruit)
          })
        })
    })
  })
  // verify page title
  it('verify title of the page', () => {
    cy.title().should('eq', 'ngx-admin Demo Application')
  })

  // verify inline form
  it.only('visit inline form', () => {
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

  // verify basic form
  it('visit basic form', () => {
    forms.getCard('Basic form').within(() => {
      cy.get('@data').then((dummydata: any) => {
        forms.getInputElement([{ index: 0, text: dummydata.email }, { index: 1, text: dummydata.password }])
        forms.checkCheckboxElement([{ index: 0, disabled: false }])
        forms.assertValue([{ index: 0, text: dummydata.email }, { index: 1, text: dummydata.password }])
        cy.get('form').submit()
        forms.assertButtonText('Submit')
      })
    })
  })

  // verify form without labels
  it('visit form without label', () => {
    forms.getCard('Form without labels').within(() => {
      cy.get('@data').then((dummydata: any) => {
        forms.getInputElement([{ index: 0, text: dummydata.email }, { index: 1, text: dummydata.subject }])
        cy.get('textarea').type(dummydata.body)
        forms.assertValue([{ index: 0, text: dummydata.email }, { index: 1, text: dummydata.subject }])
        cy.get('textarea').then(data => {
          expect(data.val()).to.equals(dummydata.body)
        })
        cy.get('form').submit()
        forms.assertButtonText('Send')
      })
    })
  })

  // verify block form
  it('visit block form', () => {
    forms.getCard('Block form').within(() => {
      cy.get('@data').then((dummydata: any) => {
        forms.getInputElement([{ index: 0, text: dummydata.firstname }, { index: 1, text: dummydata.lastname }, { index: 2, text: dummydata.email }, { index: 3, text: dummydata.website }])
        forms.assertValue([{ index: 0, text: dummydata.firstname }, { index: 1, text: dummydata.lastname }, { index: 2, text: dummydata.email }, { index: 3, text: dummydata.website }])
        cy.get(`button[type=submit]`).click()
        forms.assertButtonText('Submit')
      })
    })
  })

  it('visit horizental form', () => {
    forms.getCard('Horizontal form').within(() => {
      cy.get('@data').then((dummydata: any) => {
        forms.getInputElement([{ index: 0, text: dummydata.email }, { index: 1, text: dummydata.password }])
        forms.checkCheckboxElement([{ index: 0, disabled: false }])
        forms.assertValue([{ index: 0, text: dummydata.email }, { index: 1, text: dummydata.password }])
        cy.get('form').submit()
        forms.assertButtonText('Sign in')
      })
    })
  })
})
