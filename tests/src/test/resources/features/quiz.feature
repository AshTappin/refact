Feature: Quiz

  Background:
    Given I am on the homepage

  Scenario: Questions have multiple choice answers
    When I start to take the quiz
    Then the question 'What can you use to pass data into another component?' has the following answers
      | state             |
      | props             |
      | history           |
      | none of the above |

  Scenario: Gives immediate feedback on correct answer
    When I start to take the quiz
    And I answer 'props' to 'What can you use to pass data into another component?'
    Then I am notified that I got the correct answer

  Scenario: Gives immediate feedback on incorrect answer
    When I start to take the quiz
    And I answer 'state' to 'What can you use to pass data into another component?'
    Then I am notified that I got the incorrect answer

  Scenario: Get all answers correct results in 100% score
    When I start to take the quiz
    And I give the following answers to the following questions
      | Question                                                      | Answer                                   |
      | What can you use to pass data into another component?         | props                                    |
      | All react components have to be classes.                      | false                                    |
      | When the Greeting component is rendered, what is the outcome? | The component cannot render successfully |
      | What causes a react component to re-render?                   | When the component's state changes       |
      | Is the setState() function synchronous or asynchronous?       | Asynchronous                             |
    Then the final score page will say I scored '100%'
    And I can not see the quiz progress at the top

  Scenario: Get no answers correct results in 0% score
    When I start to take the quiz
    And I give the following answers to the following questions
      | Question                                                      | Answer                    |
      | What can you use to pass data into another component?         | state                     |
      | All react components have to be classes.                      | true                      |
      | When the Greeting component is rendered, what is the outcome? | "Hallo null" is displayed |
      | What causes a react component to re-render?                   | Only after a page refresh |
      | Is the setState() function synchronous or asynchronous?       | Synchronous               |
    Then the final score page will say I scored '0%'
#
#  Scenario: Get half answers correct and half wrong results in 50% score
#    When I start to take the quiz
#    And I give the following answers to the following questions
#      | Question                                              | Answer |
#      | What can you use to pass data into another component? | state  |
#      | All react components have to be classes.              | false  |
#    Then the final score page will say I scored '50%'

  Scenario: Cannot submit answer unless answer has been checked
    When I start to take the quiz
    Then I can not submit my answer straight away

  Scenario: Quiz question count is shown
    When I start to take the quiz
    Then I see '1 of 5 questions' at the top
    When I give the following answers to the following questions
      | Question                                              | Answer |
      | What can you use to pass data into another component? | props  |
    Then I see '2 of 5 questions' at the top