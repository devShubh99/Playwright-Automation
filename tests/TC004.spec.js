const { test, expect } = require('@playwright/test')

test('inbuilt locaters', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const logo = page.getByAltText("company-branding");
    await expect(logo).toBeVisible();

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { type: 'submit' }).click();

    // Wait for user drop-down to be visible before getting text content
    await page.waitForSelector("//p[@class='oxd-userdropdown-name']");
    const name = await page.locator("//p[@class='oxd-userdropdown-name']").textContent();
    console.log(name);
    await page.close();
});