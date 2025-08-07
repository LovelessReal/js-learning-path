// tests/example.spec.js
const { test, expect } = require('@playwright/test');

test('Проверка заголовка Google', async ({ page }) => {
  await page.goto('https://google.com');
  await expect(page).toHaveTitle(/Google/);
});
