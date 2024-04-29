import { LocatorTypes } from "../../locator-types";
import { CoreBehaviour } from "../core/core-behaviour";

/**
 * this class is relate to the scrollable methods
 * @author Lathika MBH
 * @Date 29-04-2024
 */

export class TypableBehaviour extends CoreBehaviour {

    constructor(locator: string, locaterType: LocatorTypes) {
        super(locator, locaterType);
    }

    /**
     * from this method user can type
     * @param text 
     * @returns void
     */
    ui_type(text: string): void {
        this.element.type(text);
    }

    /**
     * from this method user can click and type on the element
     * @param text 
     * @returns void
     */
    ui_click_and_type(text: string): void {
        this.element.click({force: true}).type(text, {force: true});
    }

    /**
     * from this method user can type and press the keyboard enter
     * @param text 
     * @returns void
     */
    ui_type_and_hit_keyboard_enter(text: string): void {
        this.element.type(`${text}{enter}`);
    }

    /**
     * from this method user can clear the existing text and able to type
     * @param text 
     * @returns void
     */
    ui_clear_and_type(text: string): void {
        this.element.clear().type(text,{force: true});
    }
}