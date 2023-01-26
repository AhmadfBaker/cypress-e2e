import { elementAt } from "rxjs";
import { InputElement, checkElement } from "./forms-interfaces.cy";


export class Forms {

    getCard(header: string) {
        return cy.get('nb-card-header').contains(header).parent()
    }

    getInputElement(elements: InputElement[]) {

        elements.forEach(element => {
            let ele = cy.get('input').eq(element.index)
            ele.type(element.text)
        })
    }

    checkCheckboxElement(elements: checkElement[]) {
        elements.forEach(element => {
            let ele = cy.get('input[type=checkbox]').eq(element.index)
            ele.check({ force: true })

            if (element.disabled === false) {
                ele.should('not.be.disabled')
            }
            else {
                ele.should('be.disabled')
            }
        })
    }



    assertValue(elements: InputElement[]){
        elements.forEach(element => {
            cy.get('input').eq(element.index).then(data =>{
                expect(data.val()).to.equals(element.text)

            })
        })

    }

}

export const forms = new Forms ();