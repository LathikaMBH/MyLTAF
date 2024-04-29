import { LocatorTypes } from "../../locator-types";
import { CoreBehaviour } from "../core/core-behaviour";

/**
 * this class is relate to the readable methods
 * @author Lathika MBH
 * @Date 29-04-2024
 */

export class ReadableBehaviour extends CoreBehaviour {

    constructor(locator: string, locatorType: LocatorTypes) {
        super(locator, locatorType);
    }

    /**
     * from this method user can verify the text of the captuered lement
     * @param text 
     * @returns void 
     */
    ui_assert_text_equality(text: string): void {
        this.element.contains(text);
    }

    /**
     * from this method user can verify the given exact  text
     * @param text 
     * @returns void
     */
    ui_assert_exact_text_equality(text: string): void {
        this.element.should('contain.text', text);
    }

    /**
     * from this method user can verify that string is not available in the selected element
     * @param text 
     * @returns void
     */
    ui_assert_text_should_not_visible(text: string): void {
        this.element.should('not.contain', text);
    }

    /**
     * from this method user can verify the input field text directly
     * @param text 
     * @returns void
     */
    ui_assert_input_field_text(text: string): void {
        this.element.should('have.value', text);
    }

    /**
     * from this method user can verify text in the lement is not equal to given text
     * @param text 
     * @returns void
     */
    ui_assert_input_field_text_not_available(text: string): void {
        this.element.should('not.have.value', text);
    }
}