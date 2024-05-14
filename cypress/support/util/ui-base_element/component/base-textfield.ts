import { LocatorTypes } from "../../enums";
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

    ui_type(value: string): void {
        this.typeable.type(value);
    }

    ui_click_and_type(value: string): void {
        this.typeable.click_and_type(value);
    }

    ui_clear_and_type(value: string): void {
        this.typeable.clear_and_type(value);
    }

    ui_type_and_hit_keyboard_enter(value: string): void {
        this.typeable.type_and_hit_keyboard_enter(value);
    }




}