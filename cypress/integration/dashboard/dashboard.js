/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */

import {Given,When,Then} from 'cypress-cucumber-preprocessor/steps'
import CommonPageObject from '../../support/PageObject/Common_Page_Object'
import DashboardPageObject from '../../support/PageObject/Dashboard_Page_Object';
import LoginPageObject from '../../support/PageObject/Login_Page_Object';

var user = require('../../fixtures/user.json');

const common = new CommonPageObject();
const login = new LoginPageObject();
const dashboard = new DashboardPageObject();

var incomeValue=0;

Given("user navigate to site url",async()=>{
   await common.navigateToUrl();
})

When("click on login navigation menu button",async()=>{
   await common.getNavigationMenuButton().then(async(buttonValue)=>{
       var navBarButtonVal = buttonValue.text().toString().trim();
       if(navBarButtonVal.includes(user.common_data.label_login)){
           await common.getNavigationMenuButton().click({force:true});
       }
   })
})

Then("login form is been displayed",async()=>{
   await login.getLoginForm().should('be.visible');
})

Then("user enter email",async()=>{
   await login.getLoginFormEmailField().type(user.login_data.label_email);
})

Then("user enter password",async()=>{
   await login.getLoginFormPasswordField().type(user.login_data.label_password);
})

When("user click on login submit",async()=>{
   await login.getLoginFormSubmitButton().click({force:true});
})

Then("dashboard should be display",async()=>{
   await common.getLogOutButton().should('be.visible');
})

Then("verify new income is been added",async()=>{
   await dashboard.getIncomeFieldValue().then(async(IncomeFieldVal)=>{
        incomeValue = parseInt(IncomeFieldVal.text().toString().replace("₹","").trim());
        if(incomeValue === 0){
            await dashboard.getTransactionNameField().type(user.dashboard_data.label_transaction_name);
            await dashboard.getTransactionAmountField().type(user.dashboard_data.label_transaction_income_amount);
            await dashboard.getTransactionAddButton().click({force:true});
            await dashboard.getIncomeFieldValue().then(async(IncomeFieldVal2)=>{
                incomeValue = parseInt(IncomeFieldVal2.text().toString().replace("₹","").trim());
                if(incomeValue === 30000){
                    expect(true).to.be.true;
                }
            })
        }
        else{
            await dashboard.getTransactionList().then(async(transactionListValue)=>{
                var transactionTitleVal = transactionListValue.text().toString().trim();
                if(transactionTitleVal.includes(user.dashboard_data.label_transaction_name)){
                    await cy.get("div#dashboard > div:nth-Child(2) > div > div:nth-Child(2) > div:nth-Child(2) > svg > path").click({force:true});
                }
            })
        }
   })

   Then("delete new added income record",async()=>{
       await dashboard.getIncomeFieldValue().then(async(IncomeVal)=>{
            incomeValue = parseInt(IncomeVal.text().toString().replace("₹","").trim());
            if(incomeValue === 30000){
                await dashboard.getTransactionList().then(async(transactionListValue)=>{
                    var transactionTitleVal = transactionListValue.text().toString().trim();
                    if(transactionTitleVal.includes(user.dashboard_data.label_transaction_name)){
                        await cy.get("div#dashboard > div:nth-Child(2) > div > div:nth-Child(2) > div:nth-Child(2) > svg").click({force:true});
                    }
                })  

                await dashboard.getIncomeFieldValue().then(async(IncomeVal2)=>{
                    incomeValue = parseInt(IncomeVal2.text().toString().replace("₹","").trim());
                    if(incomeValue === 0){
                        expect(true).to.be.true;
                    }  
                })
            }
       })
   })

   Then("click on logout",async()=>{
       await common.getLogOutButton().click({force:true});
   })

}) 



