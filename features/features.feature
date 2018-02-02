@tag
Feature: Title of your feature
  I want to use this template for my feature file

  @tag1
  Scenario: Login Mercury Site
    Given browser launched and hit the application URL
    And user logs in with valid credentials "mercury" and "mercury"
    Then user should see success message
    
    
  Scenario Outline: Login Mercury Site
    Given browser launched and hit the application URL
    And user logs in with valid credentials "<UserName>" and "<Password>"
    Then user should see success message
    Examples:
    
    |UserName|Password|
    |mercury |mercury |
    |mercury |mrcury  |
    #|mercur  |mercury |
    #|mercury |mercury |
    #|mercry  |mecury  |

    

  
