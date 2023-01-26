/// <reference types="cypress" />

import { InputElementPlaceHolder } from "../General-Interfaces.cy"

export class Tables {

    getTable(header: string) {
        return cy.get('nb-card-header').contains(header).parent()
    }
    fillRowByPlaceHolder(elements: InputElementPlaceHolder[]) {
        elements.forEach(element => {
            this.getColumnByPlaceHolder(element.placeholder).eq(1).type(element.text)
        })
    }
    getColumnByPlaceHolder(placeholder: string) {
        return cy.get(`input[placeholder="${placeholder}"]`)
    }

}

export const table = new Tables()