import { BasePage } from "../Pages/BasePage";


export class CustomerLogin extends BasePage{

	get Container(){
		return{
			DropDownContainer:cy.get("[id='userSelect']"),
		};
	};

	get Buttons(){
		return{
			Login:this.Container.DropDownContainer.get("[type='submit']"),
		}
	};
	
	async SelectCustomerFromDropDown(Name:string){
		this.Container.DropDownContainer.should("be.visible");
		this.Container.DropDownContainer.select(Name);
		this.Buttons.Login.click();
	};
}