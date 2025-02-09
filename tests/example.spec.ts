import { test, expect, Browser, chromium, BrowserContext, Page } from '@playwright/test';

test('The first test', async ({ page  }) => {
  // // khoi tao browser
  // const browser: Browser = await chromium.launch();
  // // khoi tao context
  // const context: BrowserContext = await browser.newContext();
  // // khoi tao page
  // const page: Page = await context.newPage();
  // await page.goto('https://pw-blog.congcu.org/')
  // await expect(page).toHaveTitle(/Học automation test từ chưa biết gì/)
  // await browser.close();

  // su dụng fixture co san cua playright
  await page.goto("https://www.saucedemo.com");
  await page.pause();
  await page.click('id=user-name');
  await page.locator('id=user-name').fill('Edison');
  await page.locator('[id="user-name"]').fill('Einstein');
  //using css selector
  await page.locator('#login-button').click();
  //using xpath
  await page.locator('xpath=//input[@name="password"]').fill('Faraday');
  await page.locator('xpath=//input[@name="login-button"]').click();
  // using text
  await page.locator('text=LOGIN').click();
  await page.locator('input:has-text("LOGIN")').click();
  await page.pause();
});
