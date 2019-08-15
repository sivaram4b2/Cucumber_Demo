$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Demo.feature");
formatter.feature({
  "line": 1,
  "name": "Bus search",
  "description": "",
  "id": "bus-search",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Search bus details",
  "description": "",
  "id": "bus-search;search-bus-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on the search page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user entered source and destination",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user clicked on search button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user able to see search details",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_is_on_the_search_page()"
});
formatter.result({
  "duration": 159106600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_entered_source_and_destination()"
});
formatter.result({
  "duration": 55100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicked_on_search_button()"
});
formatter.result({
  "duration": 102900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_able_to_see_search_details()"
});
formatter.result({
  "duration": 1700700,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.qa.cucumberdemo.stepdefinitions.StepDefinition.user_able_to_see_search_details(StepDefinition.java:36)\r\n\tat ✽.Then user able to see search details(Demo.feature:11)\r\n",
  "status": "failed"
});
});