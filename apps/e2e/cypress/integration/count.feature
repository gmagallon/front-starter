Feature: Counter

Scenario: Add 1

    Given I visit /
    And the counter value is 0
    When I add 1
    Then the counter value is 1

Scenario: Remove 1
    Given I visit /
    And the counter value is 0
    When I remove 1
    Then the counter value is -1

Scenario: Reset
    Given I visit /
    And the counter value is 0
    And I add 1
    When I reset
    Then the counter value is 0