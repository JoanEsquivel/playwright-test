import { test as setup, expect } from '@playwright/test';

const authFile = './.auth/user.json';

setup('authenticate by UI', async ({ page }, testInfo) => {

  const user = testInfo.project.use.user;
  const password = testInfo.project.use.password;
  
  // Perform authentication steps. Replace these actions with your own.
  await page.goto('https://demoqa.com/login');
  await page.getByPlaceholder("UserName").fill(user);
  await page.getByPlaceholder('Password').fill(password);
  await page.getByRole('button', { name: 'Login' }).click();
  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
  await page.waitForURL('https://demoqa.com/profile');
  // Alternatively, you can wait until the page reaches a state where all cookies are set.
  await expect(page.locator('#userName-value')).toHaveText('joanmedia');

  // End of authentication steps.

  await page.context().storageState({ path: authFile });
});