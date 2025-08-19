const {test, expect}= require('@playwright/test');
const { link } = require('fs');

test('Locating multiple elements',async({page})=>{

    await page.goto('https://demoblaze.com');
    const links = await page.$$('a');

    for(const link of links)
    {
        const linktext = await link.textContent();
        console.log(linktext);
    }
  /* page.waitForSelector("//div[@id='tbodyid']//div//h4/a");
    const products = await page.$$("//div[@id='tbodyid']//div//h4/a")
   
   for (const product of products)
    { 
        const productNames = await product.textContent();
        console.log(productNames);

   }*/

})