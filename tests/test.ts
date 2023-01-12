import { expect, test } from "@playwright/test";

test("index page has expected h1", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1")).toHaveText("Hello!");
});

test("resume page has expected h1", async ({ page }) => {
  await page.goto("/resume");
  await expect(page.locator("h1")).toHaveText("Saien Govender");
});

test("contact page has expected h1", async ({ page }) => {
  await page.goto("/contact");
  await expect(page.locator("h1")).toHaveText("Contact");
});

test("garden page has expected h1", async ({ page }) => {
  await page.goto("/garden");
  await expect(page.locator("h1")).toHaveText("The Garden");
});
