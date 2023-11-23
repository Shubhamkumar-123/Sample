$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/Login.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "I want to login to app",
  "keyword": "Given "
});
formatter.step({
  "name": "I want to enter \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I want to enterpw \u003cpassword\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Admin",
        "admin123"
      ]
    },
    {
      "cells": [
        "Admin",
        "admin12"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "I want to login to app",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefLogin.i_want_to_login_to_app()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I want to enter Admin",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefLogin.i_want_to_enter_Admin(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I want to enterpw admin123",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefLogin.i_want_to_enter_admin(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "I want to login to app",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefLogin.i_want_to_login_to_app()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I want to enter Admin",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefLogin.i_want_to_enter_Admin(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I want to enterpw admin12",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefLogin.i_want_to_enter_admin(String)"
});
formatter.result({
  "status": "passed"
});
});