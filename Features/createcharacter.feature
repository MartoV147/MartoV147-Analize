Feature: Създаване на герои

Scenario: Създаване на герой
    Given Потребителят се намира на прозореца за създаване на герой
    When Потребителят въведе име на героя "Gosho"
    And Потребителят въведе роля на героя "Druid"
    And Потребителят въведе раса на героя "Elf"
    And Потребителят въведе ниво на героя "10"
    And Потребителят натиска бутона за създаване на героя
    Then Подскача съобщение "Героят е създаден успешно"
    
Scenario: Създаване на герой без да въведе име
    Given Потребителят се намира на прозореца за създаване на герой
    When Потребителят въведе роля на героя "Druid"
    And Потребителят въведе раса на героя "Elf"
    And Потребителят въведе ниво на героя "10"
    And Потребителят натиска бутона за създаване на героя
    Then Подскача съобщение "Моля, въведете име"
    
Scenario: Създаване на герой без да въведе роля
    Given Потребителят се намира на прозореца за създаване на герой
    When Потребителят въведе име на героя "Gosho"
    And Потребителят въведе раса на героя "Elf"
    And Потребителят въведе ниво на героя "10"
    And Потребителят натиска бутона за създаване на героя
    Then Подскача съобщение "Моля, въведете роля"
    
Scenario: Създаване на герой без да въведе раса
    Given Потребителят се намира на прозореца за създаване на герой
    When Потребителят въведе име на героя "Gosho"
    And Потребителят въведе роля на героя "Druid"
    And Потребителят въведе ниво на героя "10"
    And Потребителят натиска бутона за създаване на героя
    Then Подскача съобщение "Моля, въведете раса"
    
  Scenario: Създаване на герой без да ниво  
    Given Потребителят се намира на прозореца за създаване на герой
    When Потребителят въведе име на героя "Gosho"
    And Потребителят въведе роля на героя "Druid"
    And Потребителят въведе раса на героя "Elf"
    And Потребителят натиска бутона за създаване на героя
    Then Подскача съобщение "Моля, въведете ниво"
    