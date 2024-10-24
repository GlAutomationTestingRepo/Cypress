import { BasePage } from "../Pages/BasePage";


export class PageHeader extends BasePage{

	get Container(){
		return{
			HeaderContainer:cy.get("[class='box mainhdr']"),
		}
	};

	async PressOn(ButtonName){
		this.Container.HeaderContainer.contains(ButtonName).click();
	}
}