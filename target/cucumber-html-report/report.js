$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features.feature");
formatter.feature({
  "line": 2,
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file",
  "id": "title-of-your-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "Login Mercury Site",
  "description": "",
  "id": "title-of-your-feature;login-mercury-site",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "browser launched and hit the application URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user logs in with valid credentials \"mercury\" and \"mercury\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user should see success message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.browser_launched_and_hit_the_application_URL()"
});
formatter.result({
  "duration": 11942790005,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mercury",
      "offset": 37
    },
    {
      "val": "mercury",
      "offset": 51
    }
  ],
  "location": "StepDef.user_logs_in_with_valid_credentials_and(String,String)"
});
formatter.result({
  "duration": 47774053756,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_should_see_success_message()"
});
formatter.result({
  "duration": 102862725,
  "status": "passed"
});
formatter.after({
  "duration": 2097127288,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Login Mercury Site",
  "description": "",
  "id": "title-of-your-feature;login-mercury-site",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "browser launched and hit the application URL",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user logs in with valid credentials \"\u003cUserName\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user should see success message",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "title-of-your-feature;login-mercury-site;",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ],
      "line": 18,
      "id": "title-of-your-feature;login-mercury-site;;1"
    },
    {
      "cells": [
        "mercury",
        "mercury"
      ],
      "line": 19,
      "id": "title-of-your-feature;login-mercury-site;;2"
    },
    {
      "cells": [
        "mercury",
        "mrcury"
      ],
      "line": 20,
      "id": "title-of-your-feature;login-mercury-site;;3"
    },
    {
      "cells": [
        "mercur",
        "mercury"
      ],
      "line": 21,
      "id": "title-of-your-feature;login-mercury-site;;4"
    },
    {
      "cells": [
        "mercury",
        "mercury"
      ],
      "line": 22,
      "id": "title-of-your-feature;login-mercury-site;;5"
    },
    {
      "cells": [
        "mercry",
        "mecury"
      ],
      "line": 23,
      "id": "title-of-your-feature;login-mercury-site;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Login Mercury Site",
  "description": "",
  "id": "title-of-your-feature;login-mercury-site;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "browser launched and hit the application URL",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user logs in with valid credentials \"mercury\" and \"mercury\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user should see success message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.browser_launched_and_hit_the_application_URL()"
});
formatter.result({
  "duration": 9819059825,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mercury",
      "offset": 37
    },
    {
      "val": "mercury",
      "offset": 51
    }
  ],
  "location": "StepDef.user_logs_in_with_valid_credentials_and(String,String)"
});
formatter.result({
  "duration": 49222500206,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_should_see_success_message()"
});
formatter.result({
  "duration": 59151163,
  "status": "passed"
});
formatter.after({
  "duration": 2501214540,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Login Mercury Site",
  "description": "",
  "id": "title-of-your-feature;login-mercury-site;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "browser launched and hit the application URL",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user logs in with valid credentials \"mercury\" and \"mrcury\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user should see success message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.browser_launched_and_hit_the_application_URL()"
});
formatter.result({
  "duration": 11318391304,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mercury",
      "offset": 37
    },
    {
      "val": "mrcury",
      "offset": 51
    }
  ],
  "location": "StepDef.user_logs_in_with_valid_credentials_and(String,String)"
});
formatter.result({
  "duration": 2164801742,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_should_see_success_message()"
});
formatter.result({
  "duration": 216393005,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat StepDef.StepDef.user_should_see_success_message(StepDef.java:51)\r\n\tat ✽.Then user should see success message(features.feature:15)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.write("URL at failurehttp://newtours.demoaut.com/mercurysignon.php?osCsid\u003d318598af559f5eb0f8b803cefc0bd864");
formatter.after({
  "duration": 2446758666,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Login Mercury Site",
  "description": "",
  "id": "title-of-your-feature;login-mercury-site;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "browser launched and hit the application URL",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user logs in with valid credentials \"mercur\" and \"mercury\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user should see success message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.browser_launched_and_hit_the_application_URL()"
});
formatter.result({
  "duration": 10912313786,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mercur",
      "offset": 37
    },
    {
      "val": "mercury",
      "offset": 50
    }
  ],
  "location": "StepDef.user_logs_in_with_valid_credentials_and(String,String)"
});
formatter.result({
  "duration": 34662808891,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_should_see_success_message()"
});
formatter.result({
  "duration": 93683346,
  "status": "passed"
});
formatter.after({
  "duration": 2146006405,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Login Mercury Site",
  "description": "",
  "id": "title-of-your-feature;login-mercury-site;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "browser launched and hit the application URL",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user logs in with valid credentials \"mercury\" and \"mercury\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user should see success message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.browser_launched_and_hit_the_application_URL()"
});
formatter.result({
  "duration": 9640124025,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mercury",
      "offset": 37
    },
    {
      "val": "mercury",
      "offset": 51
    }
  ],
  "location": "StepDef.user_logs_in_with_valid_credentials_and(String,String)"
});
formatter.result({
  "duration": 55232549947,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_should_see_success_message()"
});
formatter.result({
  "duration": 109293080,
  "status": "passed"
});
formatter.after({
  "duration": 1432780004,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Login Mercury Site",
  "description": "",
  "id": "title-of-your-feature;login-mercury-site;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "browser launched and hit the application URL",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user logs in with valid credentials \"mercry\" and \"mecury\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user should see success message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.browser_launched_and_hit_the_application_URL()"
});
formatter.result({
  "duration": 11423034562,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mercry",
      "offset": 37
    },
    {
      "val": "mecury",
      "offset": 50
    }
  ],
  "location": "StepDef.user_logs_in_with_valid_credentials_and(String,String)"
});
formatter.result({
  "duration": 1823023387,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_should_see_success_message()"
});
formatter.result({
  "duration": 34420716,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat StepDef.StepDef.user_should_see_success_message(StepDef.java:51)\r\n\tat ✽.Then user should see success message(features.feature:15)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.write("URL at failurehttp://newtours.demoaut.com/mercurysignon.php?osCsid\u003d9881fea9dc2b53b618a7d5b29759c54a");
formatter.after({
  "duration": 2890461078,
  "status": "passed"
});
});