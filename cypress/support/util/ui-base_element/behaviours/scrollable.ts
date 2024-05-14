import { LocatorTypes } from "../../enums";
import { CoreBehaviour } from "../core/core-behaviour";

/**
 * this class is relate to the scrollable methods
 * @author Lathika MBH
 * @Date 29-04-2024
 */

export class ScrollableBehaviour extends CoreBehaviour {

    constructor(locator: string, locatorType: LocatorTypes) {
        super(locator, locatorType);
    }


    /**
     * from this method user can scroll to bottom of the list
     * @returns void
     */
    ui_scroll_bottom(): void {
        this.element.scrollTo('bottom');
    }

    /**
     * from this method user can scroll to top of the list
     * @returns void
     */
    ui_scroll_top(): void {
        this.element.scrollTo('top');
    }

    /**
     * from this method user can scroll to right of the element
     * @returns void
     */
    ui_scroll_right(): void {
        this.element.scrollTo('right');
    }

    /**
     * from this method user can scroll to left of the element
     * @returns void
     */
    ui_scroll_left(): void {
        this.element.scrollTo('left');
    }
}