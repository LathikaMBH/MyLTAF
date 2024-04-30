import { CoreElements } from "./core-element";

export class CommonElement implements CoreElements {

    public locator!: Cypress.Chainable<JQuery<HTMLElement>>; 


    /**
     * from this method user can verify the element is visible or not
     * 
     */
    assertVisible(): void {
        this.locator.should('be.visible');
         
    }
    assertIsFocused(): void {
        throw new Error("Method not implemented.");
    }
    assertText(): void {
        throw new Error("Method not implemented.");
    }
    isEnabled(): void {

        throw new Error("Method not implemented.");
    }
    isDisabled(): void {
        throw new Error("Method not implemented.");
    }
}