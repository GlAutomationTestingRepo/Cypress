import { BasePage } from "../../Pages/BasePage";


export class AddCustomer extends BasePage{

	get Containers(){
		return{
			MainContainer:cy.get("[name='myForm']"),
		};
	};

	get Fields(){
		return {
			FirstName:this.Containers.MainContainer.get("[placeholder='First Name']"),
			LastName:this.Containers.MainContainer.get("[placeholder='Last Name']"),
			PostCode:this.Containers.MainContainer.get("[placeholder='Post Code']"),
		};
	};

	get Buttons(){
		return{
			AddCustomer:this.Containers.MainContainer.get("[type='submit']"),
		};
	};
};