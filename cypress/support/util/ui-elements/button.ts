import { LocatorTypes } from "../locator-types";
import { BaseButton } from "../ui-base_element/component/base-Buton";

export class Button extends BaseButton {

    constructor(locator: string, locatorType: LocatorTypes) {
        super(locator, locatorType);
    }
}