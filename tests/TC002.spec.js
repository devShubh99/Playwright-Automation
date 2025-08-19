const {test, expect} = require('@playwright/test');

test('Locators', async({page})=>{

   await page.goto('https://demoblaze.com/');
   await page.click("id=login2");
   await page.fill('#loginusername','pavanol');
   await page.fill('#loginpassword','test@123');
   await page.click("//button[normalize-space()='Log in']");
   const logoutlink = await page.locator('#logout2')
   await expect(logoutlink).toBeVisible();
   page.close();
})