import {test, expect, chromium} from '@playwright/test';

test("Slow motion video recording demo", async() => {
   const browser = await chromium.launch({
    slowMo: 500,
    headless: false
   });
   const context = await browser.newContext({
    recordVideo: {
        dir: 'videos/',
        size: {
            width: 800,
            height: 600
        }
    }
   });
   const page = await context.newPage();

   await page.goto('https://admin-demo.nopcommerce.com/login');
   await page.locator('input[name="Email"]').click();
   await page.locator('input[name="Email"]').press('Control+a');
   await page.locator('input[name="Email"]').fill('admin@yourstore.com');
   await page.locator('input[name="Password"]').click();
   await page.locator('input[name="Password"]').press('Control+a');
   await page.locator('input[name="Password"]').fill("admin");
   await page.locator('text=Log in').click();

   await context.close();
});