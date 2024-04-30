import { LocatorTypes } from "../../locator-types";
import { ReadableBehaviour } from "../behaviours/readable";
import { TypableBehaviour } from "../behaviours/typable";
import { CommonElement } from "../core/common-element";

export class BaseTextField extends CommonElement {
    
    typeable: TypableBehaviour;
    readable: ReadableBehaviour;

    constructor(locator: string, locatorType: LocatorTypes) {
        super();
        this.typeable = new TypableBehaviour(locator, locatorType);
        this.readable = new ReadableBehaviour(locator, locatorType);
    }
}