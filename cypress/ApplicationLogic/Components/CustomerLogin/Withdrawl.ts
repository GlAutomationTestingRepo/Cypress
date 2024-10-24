import { BasePage } from "../../Pages/BasePage";


export class Withdrawl extends BasePage{
	get Containers (){
		return{
			WithdrawlContainer:cy.get("[ng-submit='withdrawl()']"),
		};
	};

	get Fields(){
		return{
			WithdrawlAmountInput:this.Containers.WithdrawlContainer.get("[placeholder='amount']"),
			Message:this.Containers.WithdrawlContainer.get("[ng-show='message']")
		};
	};

	get Buttons(){
		return{
			Withdraw:this.Containers.WithdrawlContainer.get("[type='submit']"),
		}
	}
	
};