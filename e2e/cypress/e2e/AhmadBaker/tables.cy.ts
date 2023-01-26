/// <reference types="cypress" />
import { table } from './tables.modals.cy'
// Test Scenario
describe('Table module', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/')
        cy.get('.menu-items').contains('Tables & Data').click()
        cy.get('.menu-items').contains('Smart Table').click()
        cy.get('.sidebar-toggle').click()
        cy.fixture('example.json').as('data')

    })
    //Test Case
    it('Verify overall rows count', () => {
        // go to table page
        // Make sure we are one the right page
        // find table 
        // for loop to check all pages in the table 
        // then check the rows count 
        // if n ==5 
        // expect var length eq to 60 
        // else click next
        var length = 0;
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
                        //click next
                    }
                    console.log(length)
                    cy.log('length =', length)
                })
            })


        }



    })

    it('insert row to smart table', () => {

        // add fixture file 
        // go to table page (within)  {
        // get fixture file  with name data "cy.fixture('exmaple.json).as('data)" / then {
        // using wrap Make sure we are one the right page. find ('plus button) .click()
        // table.fillRowByColumnPlacHolder array of parameter contains PlaceHolder and Data from fixture
        // using wrap Make sure we are one the right page. find ('tick button) .click()

        // using wrap Make sure we are one the right page. find ('tbody tr).first()then (() {
        // verify inserted row by column Index
        table.getTable('Smart Table').within((smartTable) => {
            cy.get('@data').then((dummydata: any) => {
                cy.wrap(smartTable).find('.nb-plus').click()
                table.fillRowByColumnPlaceHolder([{ placeholder: "ID", text: dummydata.id }, { placeholder: "First Name", text: dummydata.firstname }, { placeholder: "Last Name", text: dummydata.lastname },
                { placeholder: "Username", text: dummydata.username }, { placeholder: "E-mail", text: dummydata.email }, { placeholder: "Age", text: dummydata.age }])
                cy.wrap(smartTable).find('.nb-checkmark').click()

                // wrap om smart table / find tbody tr. first. then(() => {

            })


        })



    })

    it.only('search smart table by age', () => {
        const ages = [20, 30, 40, 50, 100]
        //cy.writeFile('cypress/fixtures/Ahmad.csv', ages)
        cy.wrap(ages).each((age: number) => {
          // cy.readFile('cypress/fixtures/Ahmad.csv').should('exist').and('contains', age)
            cy.get('input[placeholder=Age]').clear().type(age +"")
            cy.wait(1000)
            
            table.getTable('Smart Table').find('tbody tr').each((row) => {
                if (age < 50) {
                    //cy.wrap(row).find('td').eq(6).contains(age)
                    cy.wrap(row).find('td').eq(6).should('contain', age)
                } else {
                    cy.wrap(row).should('contain', 'No data found')
                }
            })
        })
    })
    // array ages [20, 30,4 0, 50, 100]
    // wrap ages each age {
        // get place holder = age. type (age)
        // find table (row) each row {
            // if (age < 50 )
            // wrap row .find column with index 6 and make sure that age contains age from array
            // else 
            // No data found 
        //}
    //}

})

