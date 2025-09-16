const { test, expect } = require('@playwright/test');

test('HandleInputBox', async ({ page }) => {
    await page.goto("https://www.cnarios.com/concepts/form#try-it-yourself");
    
    // Using a relative XPath or a stored locator variable
    const fullNameInput = page.locator("(//input)[1]"); // Adjust this locator as needed
    
    // Check if input is visible
    await expect(fullNameInput).toBeVisible();
    // Check if input is enabled
    await expect(fullNameInput).toBeEnabled();
    // Check if input is empty (using toHaveValue for better reliability)
    await expect(fullNameInput).toHaveValue('');
    
    // Fill in text
    await fullNameInput.fill("Walt Disney");
});