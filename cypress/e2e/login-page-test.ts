import { BasePage } from "../support/page-objects/base-page"


const bagePage = new BasePage();


describe('Orange HRM Login Page Related Test cases', ()=> {



    it('login functionaly - happy path', ()=> {
        bagePage.visit_base_page()
        .step_txt_enter_user_name('AdminXX')
        .step_txt_enter_password('admin123')
        .step_btn_click_login()
        .verify_validate_dashboard_title('Dashboard');
    })

    it('Login functionality - wrong userName', ()=> {
        bagePage.visit_base_page()
        .step_txt_enter_user_name('Admin123')
        .step_txt_enter_password('admin123')
        .step_btn_click_unsuccessful_login()
        .verify_wrong_login_credential_message('Invalid credentials');
    })

    it('Login functionality - wrong passWord', ()=> {
        bagePage.visit_base_page()
        .step_txt_enter_user_name('Admin')
        .step_txt_enter_password('admin123456')
        .step_btn_click_unsuccessful_login()
        .verify_wrong_login_credential_message('Invalid credentials');
    })

    it('Login functionality - forgot password', ()=> {
        bagePage.visit_base_page()
        .step_btn_click_forgot_password()
        .step_enter_username('lathika.mbh@gmail.com')
        .step_click_reset_password()
        .verify_reset_successfully_message('Reset Password link sent successfully');
    })
})