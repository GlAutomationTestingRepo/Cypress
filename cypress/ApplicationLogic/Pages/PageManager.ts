import { BasePage } from "./BasePage";
import { MainPage } from "./MainPage";
import { CustomerLogin } from "../Components/CustomerLogin";
import { BankManagerLogin } from "../Components/BankManagerLogin";
import { PageHeader } from "../Components/PageHeader";
import { CustomerMainPage } from "../Components/CustomerLogin/CustomerMainPage";
import { Deposit } from "../Components/CustomerLogin/Deposit";
import { Withdrawl } from "../Components/CustomerLogin/Withdrawl";
import { AddCustomer } from "../Components/BankManager/AddCustomer";
import { OpenAccount } from "../Components/BankManager/OpenAccount";

class PageManager {
	basePage: BasePage;
	mainPage: MainPage;
	customerLogin: CustomerLogin;
	bankManagerLogin: BankManagerLogin;
	pageHeader: PageHeader;
	customerMainPage: CustomerMainPage;
	deposit: Deposit;
	withdrawl: Withdrawl;
	addCustomer: AddCustomer;
	openAccount: OpenAccount;

	constructor(){
		this.basePage = new BasePage();
		this.mainPage = new MainPage();
		this.customerLogin = new CustomerLogin();
		this.bankManagerLogin = new BankManagerLogin();
		this.pageHeader = new PageHeader();
		this.customerMainPage = new CustomerMainPage();
		this.deposit = new Deposit();
		this.withdrawl = new Withdrawl();
		this.addCustomer = new AddCustomer();
		this.openAccount = new OpenAccount();
	};
};

export const pageManager = new PageManager();
