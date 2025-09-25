const {test, expect} = require("@playwright/test")
test ("Revising", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("//input[@id='name']").fill("Shubham Anand")
    await page.locator("//input[@id='email']").fill("test@email.com")
    await page.locator("(//input[@id='phone'])[1]").fill("123456789")
    await page.locator("//textarea[@id='textarea']").fill("Test Address")
    const Gender_M = await page.locator("(//input[@id='male'])[1]")
    await expect(Gender_M).not.toBeChecked()
    const Gender_F = await page.locator("//input[@id='female']")
    await expect(Gender_F).not.toBeChecked()
})