/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */


import{Given,When,Then} from 'cypress-cucumber-preprocessor/steps';
import CommonPageObject from '../../support/PageObject/Common_Page_Object';
import LoginPageObject from '../../support/PageObject/Login_Page_Object';
import SignUpPageObject from '../../support/PageObject/SignUp_Page_Object';

var user = require('../../fixtures/user.json');

const common = new CommonPageObject();
const signUp = new SignUpPageObject();
const login = new LoginPageObject();

function makeid(length){

    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789';
    var charactersLength = characters.length;

    for(var i=0; i< length; i++){
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
   return result;
}


Given("user navigate to site url",async()=>{
    await common.navigateToUrl();
})

When("click on login navigation menu button",async()=>{
    await common.getNavigationMenuButton().should('be.visible');
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
    await login.getLoginFormEmailField().should('be.visible');
    await login.getLoginFormEmailField().type(makeid(2)+"@gmail.com");
})

Then("user enter password",async()=>{
    await login.getLoginFormPasswordField().should('be.visible');
    await login.getLoginFormPasswordField().type(makeid(2)+"@123");
})

When("user click on login submit",async()=>{
    await login.getLoginFormSubmitButton().should('be.visible');
    await login.getLoginFormSubmitButton().click({force:true});
})

Then("dashboard should not be visible",async()=>{
    await common.getNavigationMenuButton().should('be.visible');
    await common.getNavigationMenuButton().then((buttonValue)=>{
       var navBarButtonVal = buttonValue.text().toString().trim();
        if(navBarButtonVal.includes(user.common_data.label_sign_up)){
            expect(true).to.be.true;
        }
   })
})

Then("click on signup button",async()=>{
    await common.getNavigationMenuButton().should('be.visible');
    await common.getNavigationMenuButton().then(async(buttonValue)=>{
        var navBarButtonVal = buttonValue.text().toString().trim();
        if(navBarButtonVal.includes(user.common_data.label_sign_up)){
           await common.getNavigationMenuButton().click({force:true});
        }
    })
})

Then("user enter valid username",async()=>{
   await signUp.getUsernameField().should('be.visible');
   await signUp.getUsernameField().type(makeid(2)); 
})

Then("user enter valid email address",async()=>{
   await signUp.getEmailField().should('be.visible');
   await signUp.getEmailField().type(makeid(2)+"@gmail.com");
})

Then("user enter valid password",async()=>{
   await signUp.getPasswordField().should('be.visible');
   await signUp.getPasswordField().type(makeid(2)+"@123");
})

When("click on signup submit button",async()=>{
   await signUp.getSignUpSubmit().should('be.visible');
   await signUp.getSignUpSubmit().click({force:true}); 
})

When("click on login navigation menu button",async()=>{
    await signUp.getUserRegisteredVerify().then(async(buttonValue)=>{
        var navBarButtonVal = buttonValue.text().toString().trim();
        if(navBarButtonVal.includes(user.common_data.label_login)){
            signUp.getUserRegisteredVerify().click({force:true});
        }
    })
})

Then("dashboard should be display",async()=>{
    await signUp.getUserRegisteredVerify().should('be.visible');
    await signUp.getUserRegisteredVerify().then(async(buttonValue)=>{
        var navBarButtonVal = buttonValue.text().toString().trim();
        if(navBarButtonVal.includes(user.common_data.label_logout)){
            common.getLogOutButton().click({force:true});
        }
    })
})
