import { LocatorTypes } from "../../locator-types";
import { CoreBehaviour } from "../core/core-behaviour";

/**
 * this class is relate to the clickable methods
 * @author Lathika MBH
 * @Date 29-04-2024
 */
export class Clickable extends CoreBehaviour {

    constructor(locator: string, locatorType: LocatorTypes ){
        super(locator, locatorType)
    }


    /**
     * from this method user will be able to click on the button or soem other element
     * @returns void
     */
    ui_clcik(): void {
        this.element.click();
    }

    /**
     * from this method user can click element forcefully
     * @returns void
     */
    ui_force_click(): void {
        this.element.click({force: true});
    }

    /**
     * from this method user can double click on the element
     *@returns void
     */
    ui_double_click(): void {
        this.element.dblclick();
    }

    /**
     * from this method user can right click on the element
     * @returns void
     */
    ui_right_click(): void {
        this.element.rightclick();
    }

}