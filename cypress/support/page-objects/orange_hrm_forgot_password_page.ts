import { Button, TextField } from "../util/element-loader";
import { LocatorTypes } from "../util/enums";
import { Label } from "../util/ui-elements/label";

export class OrangeForgotPassWordPage {

    private txtUserName: string = '.oxd-input';
    private btnResetPassWord: string = '.oxd-button--secondary';
    private lblResetSuccessfully: string = '.oxd-text--h6';


    public step_enter_username(value: string) {
        new TextField(this.txtUserName, LocatorTypes.CYPRESS_GET).ui_type(value);
        return this;
    }

    public step_click_reset_password() {
        new Button(this.btnResetPassWord, LocatorTypes.CYPRESS_GET).ui_clcik();
        return this;
    }

    public verify_reset_successfully_message(value: string) {
        new Label(this.lblResetSuccessfully, LocatorTypes.CYPRESS_GET).ui_compare_text(value);
        return this;
    }


    
}