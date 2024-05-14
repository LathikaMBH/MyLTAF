import { LocatorTypes } from "../../enums";
import { CoreBehaviour } from "../core/core-behaviour";

/**
 * this class is relate to the scrollable methods
 * @author Lathika MBH
 * @Date 29-04-2024
 */

export class TickableBehaviour extends CoreBehaviour {

    constructor(locator: string, locatorType: LocatorTypes) {
        super(locator, locatorType);
    }

    /**
     * from this method user can check the given check box
     * @returns void
     */
    ui_check(): void {
        this.element.check();
    }

    /**
     * from this method user can uncheck the checked tickbox
     * @returns void
     */
    ui_uncheck(): void {
        this.element.uncheck();
    }
}