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
      "name": "@Regression"
    }
  ]
});
formatter.background({
  "line": 6,
  "name": "I am on default page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 9,
  "name": "Login mercury site for a single user using data table",
  "description": "",
  "id": "title-of-your-feature;login-mercury-site-for-a-single-user-using-data-table",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "browser launched and hit the application URL",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user enters credentials to login",
  "rows": [
    {
      "cells": [
        "mercury",
        "mercury"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user should see success message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.browser_launched_and_hit_the_application_URL()"
});
formatter.result({
  "duration": 12409226242,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_enters_credentials_to_login(DataTable)"
});
formatter.result({
  "duration": 43584416735,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_should_see_success_message()"
});
formatter.result({
  "duration": 66166719,
  "status": "passed"
});
formatter.after({
  "duration": 2379376568,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "I am on default page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 17,
  "name": "Login Mercury Site by passing direct values",
  "description": "",
  "id": "title-of-your-feature;login-mercury-site-by-passing-direct-values",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "browser launched and hit the application URL",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user logs in with valid credentials \"mercury\" and \"mercury\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user should see success message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.browser_launched_and_hit_the_application_URL()"
});
formatter.result({
  "duration": 10343999936,
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
  "duration": 19777770778,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_should_see_success_message()"
});
formatter.result({
  "duration": 60556719,
  "status": "passed"
});
formatter.after({
  "duration": 2067525063,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "Login Mercury Site using differnet testdata",
  "description": "",
  "id": "title-of-your-feature;login-mercury-site-using-differnet-testdata",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "browser launched and hit the application URL",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user logs in with valid credentials \"\u003cUserName\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user should see success message",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "title-of-your-feature;login-mercury-site-using-differnet-testdata;",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ],
      "line": 29,
      "id": "title-of-your-feature;login-mercury-site-using-differnet-testdata;;1"
    },
    {
      "cells": [
        "mercury",
        "mercury"
      ],
      "line": 30,
      "id": "title-of-your-feature;login-mercury-site-using-differnet-testdata;;2"
    },
    {
      "cells": [
        "mercury",
        "mrcury"
      ],
      "line": 31,
      "id": "title-of-your-feature;login-mercury-site-using-differnet-testdata;;3"
    },
    {
      "cells": [
        "mercur",
        "mercury"
      ],
      "line": 32,
      "id": "title-of-your-feature;login-mercury-site-using-differnet-testdata;;4"
    },
    {
      "cells": [
        "mercury",
        "mercury"
      ],
      "line": 33,
      "id": "title-of-your-feature;login-mercury-site-using-differnet-testdata;;5"
    },
    {
      "cells": [
        "mercry",
        "mecury"
      ],
      "line": 34,
      "id": "title-of-your-feature;login-mercury-site-using-differnet-testdata;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 6,
  "name": "I am on default page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 30,
  "name": "Login Mercury Site using differnet testdata",
  "description": "",
  "id": "title-of-your-feature;login-mercury-site-using-differnet-testdata;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "browser launched and hit the application URL",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user logs in with valid credentials \"mercury\" and \"mercury\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user should see success message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.browser_launched_and_hit_the_application_URL()"
});
formatter.result({
  "duration": 11232222182,
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
  "duration": 22415351601,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_should_see_success_message()"
});
formatter.result({
  "duration": 63148319,
  "status": "passed"
});
formatter.after({
  "duration": 2124443469,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "I am on default page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 31,
  "name": "Login Mercury Site using differnet testdata",
  "description": "",
  "id": "title-of-your-feature;login-mercury-site-using-differnet-testdata;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "browser launched and hit the application URL",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user logs in with valid credentials \"mercury\" and \"mrcury\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user should see success message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.browser_launched_and_hit_the_application_URL()"
});
formatter.result({
  "duration": 10566508941,
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
  "duration": 2051936349,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_should_see_success_message()"
});
formatter.result({
  "duration": 73133388,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat StepDef.LoginPageStepDef.verify_text(LoginPageStepDef.java:53)\r\n\tat StepDef.StepDef.user_should_see_success_message(StepDef.java:31)\r\n\tat ✽.Then user should see success message(features.feature:26)\r\n",
  "status": "failed"
});
formatter.write("URL at failurehttp://newtours.demoaut.com/mercurysignon.php?osCsid\u003db3a19ed5448ef162e89947cc6ac209fb");
formatter.after({
  "duration": 2655034159,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "I am on default page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 32,
  "name": "Login Mercury Site using differnet testdata",
  "description": "",
  "id": "title-of-your-feature;login-mercury-site-using-differnet-testdata;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "browser launched and hit the application URL",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user logs in with valid credentials \"mercur\" and \"mercury\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user should see success message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.browser_launched_and_hit_the_application_URL()"
});
formatter.result({
  "duration": 10187034316,
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
  "duration": 7069395831,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_should_see_success_message()"
});
formatter.result({
  "duration": 106134858,
  "status": "passed"
});
formatter.after({
  "duration": 2102170667,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "I am on default page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 33,
  "name": "Login Mercury Site using differnet testdata",
  "description": "",
  "id": "title-of-your-feature;login-mercury-site-using-differnet-testdata;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "browser launched and hit the application URL",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user logs in with valid credentials \"mercury\" and \"mercury\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user should see success message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.browser_launched_and_hit_the_application_URL()"
});
formatter.result({
  "duration": 11555528357,
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
  "duration": 22787639560,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_should_see_success_message()"
});
formatter.result({
  "duration": 86155433,
  "status": "passed"
});
formatter.after({
  "duration": 2196875301,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "I am on default page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 34,
  "name": "Login Mercury Site using differnet testdata",
  "description": "",
  "id": "title-of-your-feature;login-mercury-site-using-differnet-testdata;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "browser launched and hit the application URL",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user logs in with valid credentials \"mercry\" and \"mecury\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user should see success message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.browser_launched_and_hit_the_application_URL()"
});
formatter.result({
  "duration": 12021367171,
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
  "duration": 2243261085,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_should_see_success_message()"
});
formatter.result({
  "duration": 64193564,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat StepDef.LoginPageStepDef.verify_text(LoginPageStepDef.java:53)\r\n\tat StepDef.StepDef.user_should_see_success_message(StepDef.java:31)\r\n\tat ✽.Then user should see success message(features.feature:26)\r\n",
  "status": "failed"
});
formatter.write("URL at failurehttp://newtours.demoaut.com/mercurysignon.php?osCsid\u003d906e1cfbc72ae72d16c6d991dd424e66");
formatter.after({
  "duration": 2489098405,
  "status": "passed"
});
});