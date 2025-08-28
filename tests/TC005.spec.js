const {test, expect} = require ("@playwright/test")
test ('Assertions', async({page})=>{
    await page.goto('https://www.wikipedia.org/');
    //(1) to have URL 
    await expect(page).toHaveURL('https://www.wikipedia.org/');

    //(2) to have title
    await expect(page).toHaveTitle('Wikipedia');

    //(3) checking an element
    const logoElement = await page.locator('.central-featured-logo');
    await expect(logoElement).toBeVisible();

    //(4) Verify element is enabled or not
    const searchBox = await page.locator('#searchInput');
    await expect(searchBox).toBeEnabled();

    //(5) Verify checkbox is checked or not
    await page.click("a[id='js-link-box-en'] strong")
    const smallText = await page.locator('#skin-client-pref-vector-feature-custom-font-size-value-0')
    await smallText.click()
    await expect(smallText).toBeChecked

    //(6) Verify an attribute
    const searchButton = await page.locator("form[id='searchform'] button[class='cdx-button cdx-search-input__end-button']");
    await expect(searchButton).toHaveAttribute('text');
})