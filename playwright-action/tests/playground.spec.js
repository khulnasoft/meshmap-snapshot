const { test, expect } = require("@playwright/test");

test("Login and logout test", async ({ page }) => {
  await page.goto("https://meshplay.khulnasoft.com/login");
  await page.locator('input[name="identifier"]').fill("test-admin@khulnasoft.com");
  await page.locator('input[name="identifier"]').press("Tab");
  await page.locator('input[name="password"]').fill("test-admin");
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await page.getByRole("banner").locator("button").click();
  await page.locator("#simple-popover > .MuiBackdrop-root").click();
  await page.getByRole("banner").locator("button").click();
  await page.getByText("Logout").click();
  await page.waitForTimeout(5000);
});
