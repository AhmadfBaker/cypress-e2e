/// <reference types="cypress" />

import { InputElementPlaceHolder, InputElement } from "../e2e/General-Interfaces.cy"

export class Tables {

    getTable(header: string) {
        return cy.get('nb-card-header').contains(header).parent()
    }
    fillRowByColumnPlaceHolder(elements: InputElementPlaceHolder[]) {
        elements.forEach(element => {
            this.getColumnByPlaceHoder(element.placeholder).eq(1).type(element.text)
        })

    }

    getColumnByPlaceHoder(placeholder: string) {
        return cy.get(`input[placeholder="${placeholder}"]`)
    }

    verfiyInsertedrowByColumnIndex(elements: InputElement[]) {
        elements.forEach(element => {
            cy.get('td').eq(element.index).should('contain', element.text)
        })
    }
}

export const table = new Tables()