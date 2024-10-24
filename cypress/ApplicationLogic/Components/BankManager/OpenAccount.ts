import { BasePage } from "../../Pages/BasePage";


export class OpenAccount extends BasePage{
	
	get Containers(){
		return{
			MainContainer:cy.get("[ng-submit='process()']"),
		};
	};

	get DropDowns(){
		return{
			Customer:this.Containers.MainContainer.get("[id='userSelect']"),
			Currency:this.Containers.MainContainer.get("[id='currency']"),
		};
	};

	get Buttons(){
		return{
			Process:this.Containers.MainContainer.get("[type='submit']"),
		};
	};
};