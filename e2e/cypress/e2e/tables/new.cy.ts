/// <reference types="cypress" />
import { readFile } from "fs";
import { table } from "./tables-modules.cy";

describe('tables', () => {

    beforeEach(() => { 

        
        cy.visit("http://localhost:4200/pages/")
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()
        cy.get('.sidebar-toggle').click()
        cy.fixture('example.json').as('data')
        cy.writeFile('cypress/fixtures/Ahmad.csv', 'AhmadBaker')
        cy.readFile('cypress/fixtures/Ahmad.csv').should('exist').and('contains', 'Ahmad')
    })

 
    it('verify overall rows count', () => {
        
        //cy.writeFile('Ahmad.txt', 'AhmadBaker')
        //cy.readFile('Ahmad.txt').should('exist').and('contains', 'Ahmad')

    })

})