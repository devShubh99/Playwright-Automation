const {test, expect} = require('@playwright/test')

test('SoftAssertions',async({page})=>{

    await page.goto("https://www.wikipedia.org/")
    await expect.soft(page).toHaveTitle("wikipedia")
    await expect(page.locator("//strong[normalize-space()='English']")).toBeVisible()
    await page.click("//strong[normalize-space()='English']")
    const SearchBox = await page.locator("//input[@title='Search Wikipedia")
    await expect (SearchBox).toBeEnabled
    
})