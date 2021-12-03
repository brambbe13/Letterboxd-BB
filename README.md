# Letterboxd

- [Summary](#summary)
- [Setup](#setup)
- [Running Tests](#running-tests)
- [What Do We Test](#what-do-we-test)
- [How Do We Test](#how-do-we-test)
  - [Page Objects](#page-objects)
  - [Data Files](#data-files)

## Summary

This project showcases my automation efforts to test Letterboxd. Letterboxd is a social application where users can share
opinions and reviews on films. They can keep track of films they have seen and films they wish to see.
Test Plan, Test cases, and bugs can be found on Jira. https://dmutah.atlassian.net/jira/software/c/projects/BSP/issues/BSP-1
It uses Jest as a test runner, and Selenium Webdriver to hook into the browser. Can use chrome.

Authors: 
- Brenda Brambila

## Setup

This is how to set up my project.

1. Created repository on Github
2. clone it!
3. `npm i`
4. Set up folders
5. Page Objects
6. Test files


## Running Tests

To run all the tests, use the command: `npm test`

To run a specific test, use the command: `npx jest test_name`

## What Do We Test

The main focus of these tests were to test the functionality of the search bar and the functionality of the sign in. 
Multiple tests were executed in these two categories. In the search bar test, the functionality tested was the ability to search film titles that are either American, dubbed American films, and foreign films. This test focuses on Letterboxd's ability to manage film profiles for different people to find them and interact with them. In the Sign in test, the focus was to test if system gave user an error message when signing in with the incorrect credentials.  

## How Do We Test

These tests were organized by using the page objects to write out methods that could be reused in various testing. Another page objects, filmTest.ts, was made to write out functions that were used in the test files. 
Search Bar testing used a forLoop to search for various film titles separeted in three categories: American film titles, Dubbed American film Titles, Foreign Film titles. For the Sign In test, a function that required two parameters for username and password were used to create multiple sign in tests. A valid sign in, invalid username, and invalid password. All of these tests took screenshots of results. 

### Page Objects

We made page objects for these pages because it allows our testing to look cleaner and easier to read for future usage.
These page objects maximizes organization by importing and extending classes. 

- pageObjects2.ts
  - This page objects was a basic page objects wich stores imports from Selenium Webdriver, constructor for chrome builder, url and driver. It also has various methods to complete various actions while navigating site: getText, click, 
  setInput, enableMenu, screenshot, getAttribute.

- filmPageObjects.ts
    - This page objects stores an import from pageObjects2.ts, By.elements, and reusable functions
    used on the tests.


### Data Files

Iteration is key to test some specific functionality, so we created a Screenshot folder to keep screenshots organized based on what test they come from. 