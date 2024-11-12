import { OranegHrmLoginPage } from "./orange_hrm_login_page";
  

export class BasePage {
       

    /**
     * from this method user can visit to the any webpage.
     */
    public visit_base_page(): OranegHrmLoginPage {
        let URL = Cypress.env('url');
         //alert(Cypress.env("URL"));
       // cy.visit(Cypress.env('URL'));
       cy.visit(URL);
       //cy.visit(Cypress.env("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"));
        return new OranegHrmLoginPage();
    }

}