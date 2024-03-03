// @ts-check
const { test, expect } = require('@playwright/test');

test('parallel - TF #2 - TC #1 ', async ({ page }) => {
    console.log('parallel - TF #2 - TC #1')
});

test('parallel - TF #2 - TC #2', async ({ page }) => {
    console.log('parallel - TF #2 - TC #2')
});

test('parallel - TF #2 - TC #3', async ({ page }) => {
    console.log('parallel - TF #2 - TC #3')
});

test('parallel - TF #2 - TC #4', async ({ page }) => {
    console.log('parallel - TF #2 - TC #4')
});
