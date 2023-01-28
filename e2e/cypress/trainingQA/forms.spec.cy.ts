/// <reference types="cypress" />
import {forms} from './forms-modules.cy'

describe('tables', () => {

    beforeEach(() => { 

        
        cy.visit("http://localhost:4200/")
        cy.contains('Forms').click()
        cy.contains('Form Layout').click()
        cy.get('.sidebar-toggle').click()
        cy.fixture('example.json').as('data')
    })

    it('Inline forms using email and username', () => {
        forms.getCard('Inline form').within(() => {
            cy.get('@data').then((dummydata: any) => {
                forms.getInputElement([{ index: 0, text: dummydata.name}, {index: 1, text: dummydata.email}])
                forms.checkCheckboxElement([{index: 0, disabled: false}])
            })

        })

    })
})