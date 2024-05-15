import { LocatorTypes } from "../util/enums";
import { Button } from "../util/ui-elements/button";
import { Label } from "../util/ui-elements/label";
import { TextField } from "../util/ui-elements/textField";
import { BasePage } from "./base-page";
import { OrangeHrmDashBoardPage } from "./orange_hrm_dashboard";
import { OrangeForgotPassWordPage } from "./orange_hrm_forgot_password_page";

export class OranegHrmLoginPage {

    private userName: string = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input';
    private passWord: string = '[name="password"]';
    private btnLogin: string = '[type="submit"]';
    private txtLoginValidation: string = '.oxd-alert-content > .oxd-text';
    private btnForgetPassWord: string = '.orangehrm-login-forgot > .oxd-text';

    public step_txt_enter_user_name(value: string) {
        new TextField(this.userName, LocatorTypes.CYPRESS_GET).ui_type(value);
        return this;
    }


    public step_txt_enter_password(value: string) {
        new TextField(this.passWord, LocatorTypes.CYPRESS_GET).ui_type(value);
        return this;
    }

    public step_btn_click_login(): OrangeHrmDashBoardPage {
        new Button(this.btnLogin, LocatorTypes.CYPRESS_GET).ui_clcik();
        return new OrangeHrmDashBoardPage()
    }

    public step_btn_click_unsuccessful_login() {
        new Button(this.btnLogin, LocatorTypes.CYPRESS_GET).ui_clcik();
        return this;
    }

    public verify_wrong_login_credential_message(text: string) {
        new Label(this.txtLoginValidation, LocatorTypes.CYPRESS_GET).ui_compare_text(text);
        return this;
    }

    public step_btn_click_forgot_password() {
        new Button(this.btnForgetPassWord, LocatorTypes.CYPRESS_GET).ui_clcik();
        return new OrangeForgotPassWordPage();
    }

    

}