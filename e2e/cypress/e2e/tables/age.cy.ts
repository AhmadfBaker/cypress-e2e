
describe('The example shows how to use Data Driven Testing using Excel file.', () => {
    before(() => {
        cy.task('readXlsx', { file: 'cypress/fixtures/excelData.xlsx', sheet: "Sheet1" }).then((rows) => {
            // @ts-ignore
            rowsLength = rows.length;
            cy.writeFile("cypress/fixtures/xlsxData.json", { rows })
        })
        cy.visit('http://localhost:4200/pages/');
    })


    it("example shows how to use data from Excel file.", () => {
        
        let rowsLength;
        cy.fixture('xlsxData').then((data) => {
            for (let i = 0; i < rowsLength; i++) {
                cy.get('#username').type(data.rows[i].testData1);
            }
        })
    });
});