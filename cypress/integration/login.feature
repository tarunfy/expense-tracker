Feature: Xpense Web Application UI Automation

@focus
Scenario: verify user should be able to login after registration
Given user navigate to site url
When  click on login navigation menu button
Then  login form is been displayed
Then  user enter email
Then  user enter password
When  user click on login submit
Then  dashboard should not be visible
Then  click on signup button
Then  user enter valid username
Then  user enter valid email address
Then  user enter valid password
When  click on signup submit button
Then  dashboard should be display
