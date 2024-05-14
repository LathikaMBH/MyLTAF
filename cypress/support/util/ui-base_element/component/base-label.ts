import { LocatorTypes } from "../../enums";
import { ReadableBehaviour } from "../behaviours/readable";
import { CommonElement } from "../core/common-element"

export class BaseLabel extends CommonElement {

    readable: ReadableBehaviour;

    constructor(locator: string, locatorType: LocatorTypes) {
        super()
        this.readable = new ReadableBehaviour(locator, locatorType);
    }


    /**
     * this method can use to compare text in the label
     * @param text 
     */
    ui_compare_text(text: string) {
        this.readable.assert_text_equality(text);
    }


}