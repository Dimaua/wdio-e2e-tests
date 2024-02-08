@demo
Feature: Cucumber Demo

    Feature Description
    Background: Launch goolgle page
        Given Google page is opened

    Scenario: Scenario name
        When Search with WDIO
        Then Click on the first search result
        And URL should match https://webdriver.io

    Scenario: Scenario name
        When Search with webdrivetio
        Then Click on the first search result
        And URL should match https://webdriver.io