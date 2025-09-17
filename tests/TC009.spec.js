const {test, expect} = require("@playwright/test")

test ("HandlingCheckBox", async({page})=>{
   await page.goto("https://www.cnarios.com/concepts/checkbox#try-it-yourself");
   await page.click("//button[normalize-space()='Set Preferences']");
   const CheckBox3 = await page.locator("(//input[@type='checkbox'])[3]");
   await CheckBox3.check();
   await expect(CheckBox3).toBeChecked();
   await CheckBox3.uncheck();
   await expect(CheckBox3).not.toBeChecked();

    const CheckBoxes=[
        "(//input[@type='checkbox'])[4]",
        "(//input[@type='checkbox'])[5]",
        "(//input[@type='checkbox'])[6]",
    ];
    for(const locator of CheckBoxes)
    {
        await page.locator(locator).check();
    }
    for(const locator of CheckBoxes)
    {
        await expect(page.locator(locator)).toBeChecked();
    }
    for(const locator of CheckBoxes)
    {
        await page.locator(locator).uncheck();
    }
    for(const locator of CheckBoxes)
    {
        await expect(page.locator(locator)).not.toBeChecked();
    }
    
})

