import { BasePage } from "../Pages/BasePage";


export class BankManagerLogin extends BasePage{

	get Containers(){
		return{
			ButtonContainer:cy.get("[class='center']")
		};
	};
	
	get Buttons(){
		return{
			AddCustomer:this.Containers.ButtonContainer.get("[ng-click='btnClass1']"),
			OpenAccount:this.Containers.ButtonContainer.get("[ng-click='btnClass2']"),
			Customers:this.Containers.ButtonContainer.get("[ng-click='btnClass3']"),
		};
	};
};