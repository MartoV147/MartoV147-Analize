$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("createcharacter.feature");
formatter.feature({
  "line": 1,
  "name": "Създаване на герои",
  "description": "",
  "id": "създаване-на-герои",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Създаване на герой",
  "description": "",
  "id": "създаване-на-герои;създаване-на-герой",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Потребителят се намира на прозореца за създаване на герой",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Потребителят въведе име на героя \"Gosho\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Потребителят въведе роля на героя \"Druid\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Потребителят въведе раса на героя \"Elf\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Потребителят въведе ниво на героя \"10\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Потребителят натиска бутона за създаване на героя",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Подскача съобщение \"Героят е създаден успешно\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateCharSteps.потребителят_се_намира_на_прозореца_за_създаване_на_герой()"
});
formatter.result({
  "duration": 210220700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gosho",
      "offset": 34
    }
  ],
  "location": "CreateCharSteps.потребителят_въведе_име_на_героя(String)"
});
formatter.result({
  "duration": 2428500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Druid",
      "offset": 35
    }
  ],
  "location": "CreateCharSteps.потребителят_въведе_роля_на_героя(String)"
});
formatter.result({
  "duration": 90900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Elf",
      "offset": 35
    }
  ],
  "location": "CreateCharSteps.потребителят_въведе_раса_на_героя(String)"
});
formatter.result({
  "duration": 80600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 35
    }
  ],
  "location": "CreateCharSteps.потребителят_въведе_ниво_на_героя(String)"
});
formatter.result({
  "duration": 75900,
  "status": "passed"
});
formatter.match({
  "location": "CreateCharSteps.потребителят_натиска_бутона_за_създаване_на_героя()"
});
formatter.result({
  "duration": 1388500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Героят е създаден успешно",
      "offset": 20
    }
  ],
  "location": "CreateCharSteps.подскача_съобщение(String)"
});
formatter.result({
  "duration": 1925200,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Създаване на герой без да въведе име",
  "description": "",
  "id": "създаване-на-герои;създаване-на-герой-без-да-въведе-име",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "Потребителят се намира на прозореца за създаване на герой",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Потребителят въведе роля на героя \"Druid\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Потребителят въведе раса на героя \"Elf\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Потребителят въведе ниво на героя \"10\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Потребителят натиска бутона за създаване на героя",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Подскача съобщение \"Моля, въведете име\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateCharSteps.потребителят_се_намира_на_прозореца_за_създаване_на_герой()"
});
formatter.result({
  "duration": 104900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Druid",
      "offset": 35
    }
  ],
  "location": "CreateCharSteps.потребителят_въведе_роля_на_героя(String)"
});
formatter.result({
  "duration": 111600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Elf",
      "offset": 35
    }
  ],
  "location": "CreateCharSteps.потребителят_въведе_раса_на_героя(String)"
});
formatter.result({
  "duration": 91500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 35
    }
  ],
  "location": "CreateCharSteps.потребителят_въведе_ниво_на_героя(String)"
});
formatter.result({
  "duration": 121800,
  "status": "passed"
});
formatter.match({
  "location": "CreateCharSteps.потребителят_натиска_бутона_за_създаване_на_героя()"
});
formatter.result({
  "duration": 48800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля, въведете име",
      "offset": 20
    }
  ],
  "location": "CreateCharSteps.подскача_съобщение(String)"
});
formatter.result({
  "duration": 100300,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Създаване на герой без да въведе роля",
  "description": "",
  "id": "създаване-на-герои;създаване-на-герой-без-да-въведе-роля",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "Потребителят се намира на прозореца за създаване на герой",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "Потребителят въведе име на героя \"Gosho\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Потребителят въведе раса на героя \"Elf\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Потребителят въведе ниво на героя \"10\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Потребителят натиска бутона за създаване на героя",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Подскача съобщение \"Моля, въведете роля\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateCharSteps.потребителят_се_намира_на_прозореца_за_създаване_на_герой()"
});
formatter.result({
  "duration": 122800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gosho",
      "offset": 34
    }
  ],
  "location": "CreateCharSteps.потребителят_въведе_име_на_героя(String)"
});
formatter.result({
  "duration": 94700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Elf",
      "offset": 35
    }
  ],
  "location": "CreateCharSteps.потребителят_въведе_раса_на_героя(String)"
});
formatter.result({
  "duration": 139700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 35
    }
  ],
  "location": "CreateCharSteps.потребителят_въведе_ниво_на_героя(String)"
});
formatter.result({
  "duration": 110100,
  "status": "passed"
});
formatter.match({
  "location": "CreateCharSteps.потребителят_натиска_бутона_за_създаване_на_героя()"
});
formatter.result({
  "duration": 135400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля, въведете роля",
      "offset": 20
    }
  ],
  "location": "CreateCharSteps.подскача_съобщение(String)"
});
formatter.result({
  "duration": 76900,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Създаване на герой без да въведе раса",
  "description": "",
  "id": "създаване-на-герои;създаване-на-герой-без-да-въведе-раса",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "Потребителят се намира на прозореца за създаване на герой",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "Потребителят въведе име на героя \"Gosho\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Потребителят въведе роля на героя \"Druid\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Потребителят въведе ниво на героя \"10\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Потребителят натиска бутона за създаване на героя",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Подскача съобщение \"Моля, въведете раса\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateCharSteps.потребителят_се_намира_на_прозореца_за_създаване_на_герой()"
});
formatter.result({
  "duration": 95000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gosho",
      "offset": 34
    }
  ],
  "location": "CreateCharSteps.потребителят_въведе_име_на_героя(String)"
});
formatter.result({
  "duration": 77900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Druid",
      "offset": 35
    }
  ],
  "location": "CreateCharSteps.потребителят_въведе_роля_на_героя(String)"
});
formatter.result({
  "duration": 87300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 35
    }
  ],
  "location": "CreateCharSteps.потребителят_въведе_ниво_на_героя(String)"
});
formatter.result({
  "duration": 43500,
  "status": "passed"
});
formatter.match({
  "location": "CreateCharSteps.потребителят_натиска_бутона_за_създаване_на_героя()"
});
formatter.result({
  "duration": 33200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля, въведете раса",
      "offset": 20
    }
  ],
  "location": "CreateCharSteps.подскача_съобщение(String)"
});
formatter.result({
  "duration": 95600,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Създаване на герой без да ниво",
  "description": "",
  "id": "създаване-на-герои;създаване-на-герой-без-да-ниво",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "Потребителят се намира на прозореца за създаване на герой",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "Потребителят въведе име на героя \"Gosho\"",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "Потребителят въведе роля на героя \"Druid\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Потребителят въведе раса на героя \"Elf\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Потребителят натиска бутона за създаване на героя",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Подскача съобщение \"Моля, въведете ниво\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateCharSteps.потребителят_се_намира_на_прозореца_за_създаване_на_герой()"
});
formatter.result({
  "duration": 146100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gosho",
      "offset": 34
    }
  ],
  "location": "CreateCharSteps.потребителят_въведе_име_на_героя(String)"
});
formatter.result({
  "duration": 127300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Druid",
      "offset": 35
    }
  ],
  "location": "CreateCharSteps.потребителят_въведе_роля_на_героя(String)"
});
formatter.result({
  "duration": 76000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Elf",
      "offset": 35
    }
  ],
  "location": "CreateCharSteps.потребителят_въведе_раса_на_героя(String)"
});
formatter.result({
  "duration": 106900,
  "status": "passed"
});
formatter.match({
  "location": "CreateCharSteps.потребителят_натиска_бутона_за_създаване_на_героя()"
});
formatter.result({
  "duration": 117000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля, въведете ниво",
      "offset": 20
    }
  ],
  "location": "CreateCharSteps.подскача_съобщение(String)"
});
formatter.result({
  "duration": 67600,
  "status": "passed"
});
formatter.uri("search.feature");
formatter.feature({
  "line": 1,
  "name": "Търсене на герой по име",
  "description": "",
  "id": "търсене-на-герой-по-име",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Търсене на герой с попълнени данни",
  "description": "",
  "id": "търсене-на-герой-по-име;търсене-на-герой-с-попълнени-данни",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Потребителят се намира в прозореца за търсене на герои",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Потребителят въведе име на герой \"Gosho\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Натиска бутона за търсене",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Излиза съобщение \"Героят е намерен успешно\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.потребителят_се_намира_в_прозореца_за_търсене_на_герои()"
});
formatter.result({
  "duration": 930500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gosho",
      "offset": 34
    }
  ],
  "location": "SearchSteps.потребителят_въведе_име_на_герой(String)"
});
formatter.result({
  "duration": 99400,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.натиска_бутона_за_търсене()"
});
formatter.result({
  "duration": 3378800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Героят е намерен успешно",
      "offset": 18
    }
  ],
  "location": "SearchSteps.излиза_съобщение(String)"
});
formatter.result({
  "duration": 209900,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Търсене на герой с попълнени невалидни данни",
  "description": "",
  "id": "търсене-на-герой-по-име;търсене-на-герой-с-попълнени-невалидни-данни",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "Потребителят се намира в прозореца за търсене на герои",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Потребителят въведе име на герой \"Gosho132\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Натиска бутона за търсене",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Излиза съобщение \"Героят не е намерен\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.потребителят_се_намира_в_прозореца_за_търсене_на_герои()"
});
formatter.result({
  "duration": 48200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gosho132",
      "offset": 34
    }
  ],
  "location": "SearchSteps.потребителят_въведе_име_на_герой(String)"
});
formatter.result({
  "duration": 49900,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.натиска_бутона_за_търсене()"
});
formatter.result({
  "duration": 53400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Героят не е намерен",
      "offset": 18
    }
  ],
  "location": "SearchSteps.излиза_съобщение(String)"
});
formatter.result({
  "duration": 179700,
  "status": "passed"
});
});