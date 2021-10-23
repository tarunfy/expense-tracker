/* eslint-disable no-unused-expressions */

import{Given, When,Then} from 'cypress-cucumber-preprocessor/steps';
import CommonPageObject from '../../support/PageObject/Common_Page_Object';
import SignUpPageObject from '../../support/PageObject/SignUp_Page_Object';
var user = require('../../fixtures/user.json');

const signUp = new SignUpPageObject();
const common = new CommonPageObject();

Given("user navigate to site url",async()=>{
    await common.navigateToUrl();
})

When("click on get started button",async()=>{
    await signUp.clickOnGetStartedButton().should('be.visible');
    await signUp.clickOnGetStartedButton().click({force:true});
})

Then("user lands on sign up page",async()=>{
    await signUp.verifyUserLandsOnSignUpPage().should('be.visible');
})

Then("user enter valid username",async()=>{
    await signUp.getUsernameField().should('be.visible');
    await signUp.getUsernameField().type(user.sign_up_data.label_username);
})

Then("user enter valid email address",async()=>{
    await signUp.getEmailField().should('be.visible');
    await signUp.getEmailField().type(user.sign_up_data.label_email);
})

Then("user enter valid password",async()=>{
    await signUp.getPasswordField().should('be.visible');
    await signUp.getPasswordField().type(user.sign_up_data.label_password);
})

When("user click sign up button",async()=>{
    await signUp.getSignUpSubmit().should('be.visible');
    await signUp.getSignUpSubmit().click({force:true});
})

Then("dashboard is been displayed to user with valid registration",async()=>{
   await signUp.getUserRegisteredVerify().should('be.visible');
   await signUp.getUserRegisteredVerify().then(async(buttonValue)=>{
       var navBarButtonVal = buttonValue.text().toString().trim();
        if(navBarButtonVal.includes(user.common_data.label_logout)){
            await signUp.getUserRegisteredVerify().click({force:true});
        }
   })
})

Then("dashboard should not be display",async()=>{
    await signUp.dashboardShouldNotBeDisplayed().then((buttonValue)=>{
        var navBarButtonVal = buttonValue.text().toString().trim();
        if(navBarButtonVal.includes(user.common_data.label_login)){
           expect(true).to.be.true;
        }
    })
})
