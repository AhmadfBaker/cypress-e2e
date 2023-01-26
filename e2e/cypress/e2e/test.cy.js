import { Layout } from "./testfun"


describe('Layout', () => {
        // Describe the test scenario
    beforeEach(() => {


        cy.visit("http://localhost:4200")

    })
    it('Verify Stepper page shown correctly after click1', () => {
        // Describe Test case
        const layout = new Layout();
        layout.getLayout();
    })

})


