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