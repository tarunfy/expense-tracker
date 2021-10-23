/* eslint-disable no-undef */
/// <reference types="cypress" />

var user = require('../../fixtures/user.json');

export default class SignUpPageObject{

    clickOnGetStartedButton(){
        return cy.get(user.common_elements.get_started_button,{timeout:10000});
    }

    verifyUserLandsOnSignUpPage(){
        return cy.get(user.sign_up_elements.sign_up_submit,{timeout:10000});
    }

    getUsernameField(){
       return cy.get(user.sign_up_elements.user_name_field,{timeout:10000});
    }

    getEmailField(){
        return cy.get(user.sign_up_elements.email_field,{timeout:10000});
    }

    getPasswordField(){
        return cy.get(user.sign_up_elements.password_field,{timeout:10000});
    }

    getSignUpSubmit(){
        return cy.get(user.sign_up_elements.sign_up_submit,{timeout:10000});
    }


    getLogout(){
        return cy.get(user.common_elements.logout_button,{timeout:10000});
    }


    getUserRegisteredVerify(){
        cy.wait(10000);
        return cy.get(user.common_elements.logout_button,{timeout:10000});
    }

    dashboardShouldNotBeDisplayed(){
        cy.wait(10000);
        return cy.get(user.common_elements.navigation_menu_button,{timeout:10000});
    }

}