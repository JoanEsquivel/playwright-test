const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');
});


const users = ['user1', 'user2'];
for (const user of users) {
    test(`testing using parameter "${user}"`, async ({ page }) => {
        // Actions  
        await page.locator(".new-todo").fill(user);
        await page.getByPlaceholder('What needs to be done?').press('Enter');
        // Assertions
        await expect(page.getByTestId('todo-title')).toHaveText(user);
    });
}

test(`testing using parameter from project`, async ({ page }, testInfo) => {
    const userFromProject = testInfo.project.use.user
    // Actions  
    await page.locator(".new-todo").fill(userFromProject);
    await page.getByPlaceholder('What needs to be done?').press('Enter');
    // Assertions
    await expect(page.getByTestId('todo-title')).toHaveText(userFromProject);
});


//powershell: $env:VARE=me
//bash: VAR=me
//batch(CMD): set VAR=me
test(`testing using environment variables`, async ({ page }) => {
    const user = process.env.VAR
    // Actions  
    await page.locator(".new-todo").fill(user);
    await page.getByPlaceholder('What needs to be done?').press('Enter');
    // Assertions
    await expect(page.getByTestId('todo-title')).toHaveText(user);
});

//npm install dotenv
//create .env file
//add dotenv configuration
test(`testing using .env files`, async ({ page }, testInfo) => {
    const user = testInfo.project.use.env_var
    // Actions  
    await page.locator(".new-todo").fill(user);
    await page.getByPlaceholder('What needs to be done?').press('Enter');
    // Assertions
    await expect(page.getByTestId('todo-title')).toHaveText(user);
});


