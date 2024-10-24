import { should } from "chai";
import { pageManager } from "../ApplicationLogic/Pages/PageManager";
import { MainPageEnums,CustomerLoginEnums,DepositAmountEnum, CustomerMainPageButtonEnums } from "../ApplicationLogic/Enums/CustomEnums";
import { Withdrawl } from "../ApplicationLogic/Components/CustomerLogin/Withdrawl";


describe('Testing Main Functionalities', () => {
  it('Should deposit money and compare balance', async () => {
		pageManager.mainPage.SelectSpecificCategory(MainPageEnums.CustomerLogin);
		pageManager.customerLogin.SelectCustomerFromDropDown(CustomerLoginEnums.HermoineGranger);
		
		pageManager.customerMainPage.Fields.Balance
		.invoke("text")
		.then((text)=> {
			const Balance = Number(text.trim());
			const DepositAmount = Number(DepositAmountEnum.DepositAmount)
			const CalculatedAmount = Balance + DepositAmount;
			pageManager.customerMainPage.Buttons.Deposit.click();
			pageManager.deposit.Fields.DepositAmountInput.type(DepositAmount.toString());
			pageManager.deposit.Buttons.Deposit.click();
			pageManager.deposit.Fields.Message.should("be.visible");
			pageManager.customerMainPage.Fields.Balance
			.invoke("text")
			.should("eq",String(CalculatedAmount));
			cy.log(String(CalculatedAmount))
			console.log(String(CalculatedAmount))
		});
	});
	it('Should withdraw right amount of money and update Balance correctly',async()=>{
		pageManager.mainPage.SelectSpecificCategory(MainPageEnums.CustomerLogin);
		pageManager.customerLogin.SelectCustomerFromDropDown(CustomerLoginEnums.HermoineGranger);
		pageManager.customerMainPage.Fields.Balance
		.invoke("text")
		.then((text)=>{
			const Balance=Number(text.trim());
			const WithdrawAmount=Number(DepositAmountEnum.WithdrawAmount);
			const CalculatedAmount= Balance-WithdrawAmount;
			pageManager.customerMainPage.Buttons.Withdrawl.click();
			pageManager.withdrawl.Fields.WithdrawlAmountInput.type(DepositAmountEnum.WithdrawAmount);
			pageManager.withdrawl.Buttons.Withdraw.click();
			pageManager.withdrawl.Fields.Message.should("be.visible");
			pageManager.customerMainPage.Fields.Balance
			.invoke("text")
			.should("eq",String(CalculatedAmount))
		});
	})
})