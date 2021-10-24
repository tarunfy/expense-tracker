
/* eslint-disable no-undef */
/// <reference types="cypress" />

var user = require('../../fixtures/user.json');

export default class LoginPageObject{


  getLoginForm(){
    return cy.get(user.login_elements.login_form,{timeout:10000});
  }

  getLoginFormEmailField(){
    return cy.get(user.login_elements.email_field,{timeout:10000});
  }

  getLoginFormPasswordField(){
    return cy.get(user.login_elements.password_field,{timeout:10000});
  }
  
  getLoginFormSubmitButton(){
    return cy.get(user.login_elements.login_submit,{timeout:10000});
  }

}