import { table } from "../tables/tables-modules.cy"

describe('tables - test scenario', () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/pages/")
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()
        cy.get('.sidebar-toggle').click()
        cy.fixture('example.json').as('data')
    })
    it('verify overall rows count', () => {

        // go to the table 
        // make sure we are on the right page on every sub page
        // find table 
        //for loop 
        // then check the rows count 
        //if n == 5 
        // expect length eq to 60
        //else click next
        var length = 0;
        for (let n = 0; n < 6; n++) {
            table.getTable('Smart Table ').within((smartTable) => {

                cy.get('#ap_email')
                // get table contains header ('Smart Table').within((smartTable) =>{
                cy.wrap(smartTable).find('tbody tr').then((rows) => {
                    length += rows.length
                    // count+ (length)
                    if (n == 5) {
                        cy.get('a[aria-label=Next]').invoke('css', 'pointer-events').should('equal', 'none')
                        // next should be disabled
                    }
                    else {
                        //click next 
                    }
                })
            })
        }
    })
    it('insert row to smart table', () => {
        // get table (smart table) within,
        // get @data . then (dummydata : any )
        // wrap(smartTable).find('shofo Inspecter').click()
        // table.fillRowByPlaceHolder([{placeholder: "ID", text:dummydata.id},  ]) 
        // find(checkMark !!!!! from inspector ).click() 
            table.getTable('Smart Table').within((smartTable) => {
                cy.get('@data').then((dummydata: any) => {
                    cy.wrap(smartTable).find('.nb-plus').click()
                    table.fillRowByColumnPlaceHolder([{ placeholder: "ID", text: dummydata.id }, { placeholder: "First Name", text: dummydata.firstname }, { placeholder: "Last Name", text: dummydata.lastname },
                    { placeholder: "Username", text: dummydata.username }, { placeholder: "E-mail", text: dummydata.email }, { placeholder: "Age", text: dummydata.age }])
                    cy.wrap(smartTable).find('.nb-checkmark').click()

                    cy.wrap(smartTable).find('table').first().then(() =>{
                        table.verifyInsertedRowByColumnIndex([{ index: 1, text: dummydata.id }, { index: 2, text: dummydata.firstname }, { index: 3, text: dummydata.lastname },
                            { index: 4, text: dummydata.username }, { index: 5, text: dummydata.email }, { index: 6, text: dummydata.age }])    })
            


                })
            })
        })

})

