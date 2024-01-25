import { test, expect } from "@playwright/test";

test("snapshot", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveScreenshot();
});
