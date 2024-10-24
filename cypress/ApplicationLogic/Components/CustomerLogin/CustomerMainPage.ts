import { BasePage } from "../../Pages/BasePage";


export class CustomerMainPage extends BasePage{
	get Containers(){
		return{
			InfoContainer:cy.get("[class='center']").eq(0),
			ButtonContainer:cy.get("[class='center']").eq(1),
		}
	};
	get Fields(){
		return{
			AccountNumber:this.Containers.InfoContainer.get("[class='ng-binding']").eq(0),
			Balance:this.Containers.InfoContainer.get("[class='ng-binding']").eq(1),
			Currency:this.Containers.InfoContainer.get("[class='ng-binding']").eq(2),
		};
	};

	get Buttons(){
		return{
			Transactions:this.Containers.ButtonContainer.get("[ng-click='transactions()']"),
			Deposit:this.Containers.ButtonContainer.get("[ng-click='deposit()']"),
			Withdrawl:this.Containers.ButtonContainer.get("[ng-click='withdrawl()']"),
		};
	};
	async SelectSpecificButton(ButtonName:string){
		this.Containers.ButtonContainer.contains(ButtonName).click();
	}
}