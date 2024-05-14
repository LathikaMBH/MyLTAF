import { LocatorTypes } from "../../enums";
import { ClickableBehaviour } from "../behaviours/clcikable";
import { ReadableBehaviour } from "../behaviours/readable";
import { CommonElement } from "../core/common-element";

export class BaseButton extends CommonElement {

    clickable: ClickableBehaviour;
    readable: ReadableBehaviour;

    constructor(locator: string, locatorType: LocatorTypes) {
        super();
        this.clickable = new ClickableBehaviour(locator, locatorType);
        this.readable = new ReadableBehaviour(locator, locatorType);
    }

    ui_clcik(): void {
        this.clickable.clcik();
    }

    ui_double_click(): void {
        this.clickable.double_click();
    }

    ui_right_click(): void {
        this.clickable.right_click();
    }

    ui_force_click(): void {
        this.clickable.force_click();
    }
}