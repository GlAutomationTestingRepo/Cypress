__Cypress Banking System Test Suite__
This project is a Cypress test suite designed to automate the validation of key functionalities within a customer banking system. It focuses on verifying the deposit and withdrawal processes and ensuring that account balances are updated accurately.

__Project Overview__
This test suite simulates a user's interactions with the banking system and performs end-to-end functional testing to verify that the balance updates correctly after transactions. The project is built with __Cypress__ and __TypeScript__, leveraging a page object model for maintainability and reusability of test components.

__Key Features:__
+Functional & UI Testing: Tests the core banking features (deposit and withdrawal) through a web interface.
+Automated Balance Verification: Ensures the account balance is updated correctly after each transaction.
+Page Object Model (POM): Uses PageManager to manage different pages and components, reducing code duplication and making tests more modular.
+Enums for Data Management: Utilizes enums to manage test data like customer names, deposit amounts, and button actions, ensuring that tests are clean and easy to maintain.
__Test Cases__
1. Deposit Money and Compare Balance:
  +Goal: Ensure that after depositing a predefined amount, the balance reflects the correct value.
  +Steps:
    1. Login to the customer account.
    2. Capture the current balance.
    3. Add a predefined deposit amount.
    4. Perform the deposit action.
    5. Verify the updated balance is correct.
2. Withdraw Money and Update Balance:
  +Goal: Ensure that after withdrawing a predefined amount, the balance reflects the correct value.
  +Steps:
    1.Login to the customer account.
    2.Capture the current balance.
    3.Subtract a predefined withdrawal amount.
    4.Perform the withdrawal action.
    5.Verify the updated balance is correct.
__Project Structure__
Cypress
 ├── ApplicationLogic
 │ ├── Components
 │ │ ├── BankManager
 │ │ │ ├── Customers
 │ │ │ │ └── CustomerTable.ts
 │ │ │ │ └── SearchCustomers.ts
 │ │ │ └── AddCustomer.ts
 │ │ │ └── OpenAccount.ts
 │ │ ├── CustomerLogin
 │ │ │ └── CustomerMainPage.ts
 │ │ │ └── Deposit.ts
 │ │ │ └── Transactions.ts
 │ │ │ └── Withdrawl.ts
 │ │ └── BankManagerLogin.ts
 │ │ └── PageHeader.ts
 │ ├── Enums
 │ │ └── CustomEnums.ts
 │ ├── Pages
 │ │ └── BasePage.ts
 │ │ └── MainPage.ts
 │ │ └── PageManager.ts
 ├── downloads
 ├── e2e
 │ └── test.cy.ts
 ├── fixtures
 ├── support
 └── node_modules

__Key Files:__
  +PageManager: Centralizes the management of page objects and components for ease of access and reuse.
  +Enums: Holds the constant values used across the tests, such as deposit and withdrawal amounts, customer names, and button identifiers.
__Installation__
  +Clone the repository:
    git clone https://github.com/GlAutomationTestingRepo/Cypress.git
  +Install dependencies:
    npm install
  +Run Cypress:
    npx cypress open

__How It Works__
  +Login: The test suite begins by selecting a specific customer and logging into their account.
  +Balance Handling: It captures the current balance using Cypress's .invoke("text") method.
  +Transactions: The suite performs deposit and withdrawal actions by entering values in the respective fields and clicking the necessary buttons.
  +Assertions: After each transaction, the updated balance is compared with the expected value using assertions to ensure accuracy.
__Dependencies__
  +Cypress
  +TypeScript
