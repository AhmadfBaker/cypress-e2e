/// <reference types="cypress" />
export class Tables{ 

    getTable(header: string){
        return cy.get('nb-card-header').contains(header).parent()
    }

}

export const table = new Tables()