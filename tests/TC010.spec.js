const {test, expect} = require("@playwright/test")
test ("Revising", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("//input[@id='name']").fill("Shubham Anand")
    await page.locator("//input[@id='email']").fill("test@email.com")
    



})