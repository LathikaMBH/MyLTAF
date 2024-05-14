import { LocatorTypes } from "../util/enums";
import { Label } from "../util/ui-elements/label";

export class OrangeHrmDashBoardPage {

    private dashboardTitle: string = '.oxd-topbar-header-breadcrumb > .oxd-text';


    public verify_validate_dashboard_title(text: string) {
        new Label(this.dashboardTitle, LocatorTypes.CYPRESS_GET).ui_compare_text(text);
        return this;
    }
}