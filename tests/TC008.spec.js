const {test, expect} = require("@playwright/test")

test('HandlingRadio', async ( {page} ) => {     

    await page.goto("https://www.cnarios.com/concepts/radio#try-it-yourself");
    //Radio button
    const Question1 = await page.locator("//input[@value='get(url)']");
    await Question1.check();
    await expect(Question1).toBeChecked();

    const Question2 = await page.locator("//input[@value='To locate a single web element']");
    //await Question2.check();
    await expect(Question2).not.toBeChecked

})