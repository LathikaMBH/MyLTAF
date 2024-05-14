import { LocatorTypes } from "../enums";
import { BaseLabel } from "../ui-base_element/component/base-label";

export class Label extends BaseLabel {

    constructor(locator: string, locatorType: LocatorTypes) {
        super(locator, locatorType);

    }
}