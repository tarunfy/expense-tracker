
/* eslint-disable no-undef */


/// <reference types="cypress" />
var user = require('../../fixtures/user.json');

export default class DashboardPageObject{

    getIncomeFieldValue(){
        cy.wait(6000);
        return cy.get(user.dashboard_elements.income_value_field,{timeout:10000});
    }

    getTransactionNameField(){
        return cy.get(user.dashboard_elements.transaction_name_field,{timeout:10000});
    }

    getTransactionAmountField(){
        return cy.get(user.dashboard_elements.transaction_amount_field,{timeout:10000});
    }

    getTransactionAddButton(){
        return cy.get(user.dashboard_elements.transaction_add_button,{timeout:10000});
    }
    
    getTransactionList(){
        return cy.get(user.dashboard_elements.transaction_list,{timeout:10000});
    }
}