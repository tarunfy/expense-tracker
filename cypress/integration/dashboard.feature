Feature: Xpense Web Application UI Automation

@focus
Scenario: verify new transaction is been added as income
Given user navigate to site url
When  click on login navigation menu button
Then  login form is been displayed
Then  user enter email
Then  user enter password
When  user click on login submit
Then  dashboard should be display
Then  verify new income is been added 
Then  click on logout 

@focus
Scenario: verify new transaction record is been removed as income
Given user navigate to site url
When  click on login navigation menu button
Then  login form is been displayed
Then  user enter email
Then  user enter password
When  user click on login submit
Then  dashboard should be display
Then  verify new income is been added
Then  delete new added income record 
Then  click on logout 

@focus
Scenario: verify the expense is deducted from income and total amount
Given user navigate to site url
When  click on login navigation menu button
Then  login form is been displayed
Then  user enter email
Then  user enter password
When  user click on login submit
Then  dashboard should be display
Then  verify new income is been added
Then  verify expense is been deducted from income and total amount
Then  click on logout 
