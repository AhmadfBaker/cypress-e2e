/// <reference types="cypress" />

import { getMultipleValuesInSingleSelectionError } from "@angular/cdk/collections"
import { table, Tables } from "./tables-modules.cy"

describe('tables', () => {

    beforeEach(() => {


        cy.visit("http://localhost:4200/pages/")
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()
        cy.get('.sidebar-toggle').click()
        cy.fixture('example.json').as('data')
    })

    it('verify overall rows count', () => {
        var length = 0
        for (let n = 0; n < 6; n++) {
            table.getTable('Smart Table').within((smartTable) => {
                cy.wrap(smartTable).find('tbody tr').then((rows) => {
                    length += rows.length

                    if (n == 5) {
                        cy.get('a[aria-label=Next]').invoke('css', 'pointer-events').should('equal', 'none')
                        expect(length).to.eq(60)

                    }
                    else {
                        cy.get('a[aria-label=Next]').click()

                    }
                    console.log(length)

                })
            })
        }

    })

    it.only('verify overall rows count', () => {
        const ages = [20, 30, 40, 50, 100]
        cy.wrap(ages).each((age: number) => {
            cy.get('input[placeholder=Age]').clear().type(age +"")
            Tables
            cy.wait(1000)

            cy.get('tbody tr').each((row) =>{
                if(age < 50) {
                    cy.wrap(row).find('td').eq(6).should('contain', age)
                }
                else {
                    cy.wrap(row).should('contain', 'No data found')
                }
            
            })


        })
    })
})



