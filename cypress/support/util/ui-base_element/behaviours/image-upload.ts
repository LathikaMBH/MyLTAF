import { LocatorTypes } from "../../enums";
import { CoreBehaviour } from "../core/core-behaviour";

export class ImageUploadBehaviour extends CoreBehaviour {

    constructor(locator: string, locatorType: LocatorTypes) {
        super(locator, locatorType);
    }

    ui_image_upload(element: string, imagePath: string): void {
        //TODO
}
}