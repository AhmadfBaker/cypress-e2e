/// <reference types="cypress" />

import { forms } from "./form-modules.cy"


describe('forms', () => {

    beforeEach(() => {
        // go to page
        cy.visit('http://localhost:4200/pages/forms/layouts')
        //pull data
        cy.fixture('example.json').as('data')

    })

    it('visit inline form', () => {
        forms.getCard('Inline form').within(() => {
            cy.get('@data').then((dummydata: any) => {
                forms.getInputElement([{ index: 0, text: dummydata.name }, { index: 1, text: dummydata.email }])
                forms.checkCheckboxElement([{ index: 0, disabled: false}])
                forms.assertValue([{ index: 0, text: dummydata.name }, { index: 1, text: dummydata.email }])
            })
        })
    })
})












