Feature: Quiz

  Background:
    Given I am on the homepage

  Scenario: Questions have multiple choice answers
    When I start to take the quiz
    Then the question 'What can you use to pass data into a component?' has the following answers
      | state             |
      | props             |
      | history           |
      | none of the above |

  Scenario: Gives immediate feedback on correct answer
    When I start to take the quiz
    And I answer 'props' to 'What can you use to pass data into a component?'
    Then I am notified that I got the correct answer

  Scenario: Gives immediate feedback on incorrect answer
    When I start to take the quiz
    And I answer 'state' to 'What can you use to pass data into a component?'
    Then I am notified that I got the incorrect answer

  Scenario: Get all answers correct results in 100% score
    When I start to take the quiz
    And I give the following answers to the following questions
      | Question                                        | Answer |
      | What can you use to pass data into a component? | props  |
    Then the final score page will say I scored '100%'

  Scenario: Get no answers correct results in 0% score



