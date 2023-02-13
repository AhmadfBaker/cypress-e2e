/// <reference types="cypress" />

import { table } from "./tables-modules.cy"

describe('Ahmad-Baker-APIs', () => {

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

    it('verify overall rows count', () => {
        const ages = [20, 30, 40, 50, 100]
        cy.wrap(ages).each((age: number) => {
            cy.get('input[placeholder=Age]').clear().type(age + "")
            cy.wait(1000)

            cy.get('tbody tr').each((row) => {
                if (age < 50) {
                    cy.wrap(row).find('td').eq(6).should('contain', age)
                }
                else {
                    cy.wrap(row).should('contain', 'No data found')
                }

            })


        })
    })

    it('insert row to smart table', () => {
        table.getTable('Smart Table').within((smartTable) => {
            cy.get('@data').then((dummydata: any) => {
                cy.wrap(smartTable).find('.nb-plus').click()
                table.fillRowByColumnPlaceHolder([
                    { placeholder: "ID", text: dummydata.id },
                    { placeholder: "First Name", text: dummydata.firstname },
                    { placeholder: "Last Name", text: dummydata.lastname },
                    { placeholder: "Username", text: dummydata.username },
                    { placeholder: "E-mail", text: dummydata.email },
                    { placeholder: "Age", text: dummydata.age }])
                cy.get('i.nb-checkmark').click()

                cy.wrap(smartTable).find('tbody tr').first().then(() => {
                    table.verfiyInsertedrowByColumnIndex([
                        { index: 1, text: dummydata.id },
                        { index: 2, text: dummydata.firstname },
                        { index: 3, text: dummydata.lastname },
                        { index: 4, text: dummydata.username },
                        { index: 5, text: dummydata.email },
                        { index: 6, text: dummydata.age }])

                })

            })


        })

    })


    it.only("Get a list of users", () => {
        cy.request("GET", "https://dummy.restapiexample.com/api/v1/employees").then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.results).length.to.be.greaterThan(1)
        })
    })



    it.only('Adds User to list - POST', () => {

        cy.request({
            method: 'POST',
            url: 'https://dummy.restapiexample.com/api/v1/create',
            body: {
                "name": "test",
                "salary": "123",
                "age": "23",
                "ahmad": "1222",
                "test": "aaa"
            }
            

        })



    })

})

