/* eslint-disable no-undef */


/// <reference types="cypress" />

var user = require('../../fixtures/user.json');

export default class CommonPageObject{

    navigateToUrl(){
       return cy.visit(user.common_elements.site_url,{timeout:10000});
    }

}