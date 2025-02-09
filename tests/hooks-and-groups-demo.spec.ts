import { test, expect } from "@playwright/test";

test.describe("All my tests", () => {
  test.beforeEach("Login", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    await page.waitForURL("https://www.saucedemo.com/inventory.html");
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test("Home Page", async ({ page }) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="item-1-title-link"]').click();
    await page.locator('[data-test="add-to-cart"]').click();
    await page.locator('[data-test="back-to-products"]').click();
  });

  test("Logout", async ({ page }) => {
    await page.locator("text=Open Menu").click();
    await page.locator('[data-test="logout-sidebar-link"]').click();
    await page.waitForURL("https://www.saucedemo.com/");
  });
});
