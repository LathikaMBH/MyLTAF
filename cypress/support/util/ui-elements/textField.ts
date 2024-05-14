import { LocatorTypes } from "../enums";
import { BaseButton } from "../ui-base_element/component/base-Buton";
import { BaseTextField } from "../ui-base_element/component/base-textfield";

export class TextField extends BaseTextField {

    constructor(locator: string, locatorType: LocatorTypes) {
        super(locator, locatorType);
    }
}