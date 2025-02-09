import {test, expect} from '@playwright/test';

test('Assertion Demo', async ({page}) => {
  await page.goto("https://kitchen.applitools.com/");
  await page.pause();
  //check element present or not
  await expect(page.locator('text=The Kitchen')).toHaveCount(1);
  if(await page.$('text=The Kitchen')) {
    await page.locator('text=The Kitchen').click();
  }
  //check element hidden or visiable
  await expect(page.locator('text=The Kitchen')).toBeVisible();
  //await expect.soft(page.locator('text=The Kitchen')).toBeHidden();
  //check element enabled or disabled
  await expect(page.locator('text=The Kitchen')).toBeEnabled();
  //await expect.soft(page.locator('text=The Kitchen')).toBeDisabled();
  //check text
  await expect(page.locator('text=The Kitchen')).not.toHaveText('aaaa');
  await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen');
  //check attribute
  await expect(page.locator('text=The Kitchen')).toHaveAttribute('class', /.*css-dpmy2a/);
  await expect(page.locator('text=The Kitchen')).toHaveClass(/.*css-dpmy2a/);
  //chẹk url and title
  await expect(page).toHaveURL('https://kitchen.applitools.com/');
  await expect(page).toHaveTitle(/.*Kitchen/);
  //visual validation screenshot
 // await expect(page).toHaveScreenshot();
  await page.pause();
}) 