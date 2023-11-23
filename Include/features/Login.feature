@tag
Feature: Title of your feature
  I want to use this template for my feature file

  @tag1
  Scenario Outline: Title of your scenario outline
    Given I want to login to app
    When I want to enter <username> 
    Then I want to enterpw <password>

    Examples: 
      | username | password |
      | Admin    | admin123 |
      | Admin    | admin12  |
