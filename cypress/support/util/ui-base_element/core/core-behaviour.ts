import { FrameworkException } from "../../exceptions/framework-exception";
import { LocatorTypes } from "../../locator-types";

export abstract class CoreBehaviour {

    public element: Cypress.Chainable<JQuery<HTMLElement>>

    constructor(locator: string, locationType: LocatorTypes) {
        switch (locationType) {
            case LocatorTypes.XPATH:
                this.element = cy.xpath(locator)
                break;

            case LocatorTypes.CYPRESS_GET:
                this.element =  cy.get(locator)
                break;
            
            default: {
                throw new FrameworkException("Oops ! Unsupported locator type")
                break;
            }    
        }

    }
}