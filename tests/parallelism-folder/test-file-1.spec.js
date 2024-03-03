// @ts-check
const { test, expect } = require('@playwright/test');

test('parallel - TF #1 - TC #1 ', async ({ page }) => {
    console.log('parallel - TF #1 - TC #1')
    // await expect(page).toHaveTitle(/Playwright/);
});

test('parallel - TF #1 - TC #2', async ({ page }) => {
    console.log('parallel - TF #1 - TC #2')
    // await expect(page).toHaveTitle(/Playwright/);
});

test('parallel - TF #1 - TC #3', async ({ page }) => {
    console.log('parallel - TF #1 - TC #3')
    // await expect(page).toHaveTitle(/Playwright/);
});

test('parallel - TF #1 - TC #4', async ({ page }) => {
    console.log('parallel - TF #1 - TC #4')
});
