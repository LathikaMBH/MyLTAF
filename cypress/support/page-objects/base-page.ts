import { OranegHrmLoginPage } from "./orange_hrm_login_page";
  

export class BasePage {
       

    /**
     * from this method user can visit to the any webpage.
     */
    public visit_base_page(): OranegHrmLoginPage {
         //alert(Cypress.env("URL"));
        cy.visit(Cypress.env('URL'));
        return new OranegHrmLoginPage();
    }

}