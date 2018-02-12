 @Regression 
Feature: Title of your feature
  I want to use this template for my feature file


Background: I am on default page

     
    Scenario: Login mercury site for a single user using data table
    Given browser launched and hit the application URL
    And user enters credentials to login
    |mercury|mercury|
    Then user should see success message
  
  
   
    Scenario: Login Mercury Site by passing direct values
    Given browser launched and hit the application URL
    And user logs in with valid credentials "mercury" and "mercury"
    Then user should see success message
    
   
    Scenario Outline: Login Mercury Site using differnet testdata
    Given browser launched and hit the application URL
    And user logs in with valid credentials "<UserName>" and "<Password>"
    Then user should see success message
    Examples:
    
    |UserName|Password|
    |mercury |mercury |
    |mercury |mrcury  |
    |mercur  |mercury |
    |mercury |mercury |
    |mercry  |mecury  |
    
    
  

    

  
