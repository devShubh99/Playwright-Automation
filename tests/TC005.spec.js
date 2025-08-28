const {test, expect} = require ("@playwright/test")
test ('Assertions', async({page})=>{
    await page.goto('https://www.wikipedia.org/');
    await expect(page).toHaveTitle('Wikipedia');

})