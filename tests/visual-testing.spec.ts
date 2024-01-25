import { test, expect } from "@playwright/test";

test("Snapshot homepage", async ({ page }) => {
  await page.goto("/");
  // await page.waitForTimeout(200);
  await expect(page).toHaveScreenshot({ fullPage: true });
});
