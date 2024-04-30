import { LocatorTypes } from "../../locator-types";
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
}