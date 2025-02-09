import {test, expect} from "@playwright/test";
import { f1, f2 } from "./demo/hello";

test("My First test demo", async ({page}) =>  {
    await page.goto("https://google.com");
    await expect(page).toHaveTitle("Google");
})