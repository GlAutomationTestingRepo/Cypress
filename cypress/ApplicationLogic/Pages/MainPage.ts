import { BasePage } from "./BasePage";


export class MainPage extends BasePage{
	get Containers(){
		return{
			MainContainer:cy.get("[class='borderM box padT20']"),
		}
	}
	async SelectSpecificCategory(NameOFCategory:string){
		cy.visit("/");
		this.Containers.MainContainer.should("be.visible");
		this.Containers.MainContainer.contains(NameOFCategory).click();
	}
}