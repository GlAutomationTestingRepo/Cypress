import { BasePage } from "../../Pages/BasePage";


export class Deposit extends BasePage{
	get Containers(){
		return{
			MainContainer:cy.get("[ng-submit='deposit()']"),
		};
	};
	get Fields(){
		return{
			DepositAmountInput:this.Containers.MainContainer.get("[placeholder='amount']"),
			Message:this.Containers.MainContainer.get("[ng-show='message']"),
		};
	};
	get Buttons(){
		return{
			Deposit:this.Containers.MainContainer.get("[type='submit']"),
		};
	};
};