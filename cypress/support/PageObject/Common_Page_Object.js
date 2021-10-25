/* eslint-disable no-undef */


/// <reference types="cypress" />

var user = require('../../fixtures/user.json');

export default class CommonPageObject{

    navigateToUrl(){
       return cy.visit(user.common_elements.site_url,{timeout:10000});
    }

    getNavigationMenuButton(){
        return cy.get(user.common_elements.navigation_menu_button,{timeout:10000});
    }

    getLogOutButton(){
        return cy.get(user.common_elements.logout_button,{timeout:18000});
    }

}