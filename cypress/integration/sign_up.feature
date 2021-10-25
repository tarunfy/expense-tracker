Feature: Xpense Web Application UI Automation

#@focus
Scenario: verify user is signed up with new account
Given user navigate to site url
When  click on get started button
Then  user lands on sign up page
Then  user enter valid username
Then  user enter valid email address
Then  user enter valid password
When  user click sign up button
Then  dashboard is been displayed to user with valid registration

#@focus
Scenario: verify user is not allowed to signup with existing credentials
Given user navigate to site url
When  click on get started button
Then  user lands on sign up page
Then  user enter valid username
Then  user enter valid email address
Then  user enter valid password
When  user click sign up button
Then  dashboard should not be display
