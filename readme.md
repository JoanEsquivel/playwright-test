# Video: Useful Commmands 

## Install Playwright

- Install Playwright from Scratch: 
``` npm init playwright@latest ```
- Install Project Dependencies after clone
``` npm i ```
- Install browsers manually: 
``` npx playwright install chromium firefox webkit ```

## Execution commands
- Run all the tests
```npx playwright test```
- Run tests using the UI mode
``` npx playwright test --ui```
- Run a single test file
``` npx playwright test tests/demo-todo-app.spec.js```
- Run a set of test files
``` npx playwright test tests/demo-todo-app.spec.js tests/example.spec.js```
- Run files that have "example" in the file name
``` npx playwright test example ```
- Run tests in headed browsers
``` npx playwright test --headed ```
- Choose a reporter
``` npx playwright test example --reporter=list```
- Run in debug mode with Playwright Inspector
``` npx playwright test example --debug ```

## Report commands
- Show HTML Reporter
``` npx playwright show-report ```

## Maintenance commands
- Update playwright to the latest version
```npm install -D @playwright/test@latest```
- Check PW version
``` npx playwright --version```

## Help commands:
- Ask for help
``` npx playwright test --help ```

## Parallelism Notes
Playwright Test runs tests in parallel. By default, test files are run in parallel.

Let´s run: ```  npx playwright test -g "parallel" ```

* All tests run in worker processes.
* All workers have identical environments and each starts its own browser.
* You can't communicate between the workers. 
* Multiple test files are usually run in a single worker one after another.
* Workers are always shutdown after a test failure to guarantee pristine environment for following tests.

### Control MAX number of workers
``` npx playwright test -g "parallel" --workers 2```

### Disable parallelism
``` npx playwright test -g "parallel" --workers 1 ```

### Parallelize tests in a single file
* By default, tests in a single file are run in order.
* If you have many independent tests in a single file, you might want to run them in parallel with test.describe.configure().

Check how to do change it here -> https://playwright.dev/docs/test-parallel#parallelize-tests-in-a-single-file

## Limit failures and fail fast
Playwright Test will stop after reaching this number of failed tests and skip any tests that were not executed yet. This is useful to avoid wasting resources on broken test suites.
``` npx playwright test -g "parallel" --workers 2 --max-failures=3 ```