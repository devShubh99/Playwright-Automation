const {test, expect} = require('@playwright/test')

test('inbuilt locaters', async ({page})=>
{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const logo = page.getByAltText("company-branding");
    await expect(logo).toBeVisible();

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    page.getByRole('button', { type: 'submit' });
    page.waitForSelector()
    const name= page.locator("//p[@class='oxd-userdropdown-name']").textContent
    console.log(name);
    page.close

}
) 