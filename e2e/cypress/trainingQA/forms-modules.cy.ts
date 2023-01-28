import { checkElement } from '../e2e/AhmadBaker/forms-interfaces.cy'
import { InputElement } from './forms-interface.c'
export class Forms {

    getCard(header: string) {
        return cy.get('nb-card-header').contains(header).parent()
    }

    getInputElement(elements: InputElement[]) {
        elements.forEach(element => {
            cy.wrap(element).get('input').eq(element.index).type(element.text)
        })
    }

    checkCheckboxElement(elements: checkElement[]) {
        elements.forEach((element) => {
            let ele = cy.get('input[type=checkbox]').eq(element.index).check({ force: true })
            if (element.disabled == false) {
                ele.should('not.be.disabled')
            }

            else {
                ele.should('be.disabled')
            }

        })

    }   

}
    export const forms = new Forms()