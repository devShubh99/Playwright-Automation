const {test,expect} = require('@playwright/test')

test ('AssertionsTest',async ({page})=>{

    await page.goto('https://www.wikipedia.org/')

    //(1) toHaveURL
    await expect(page).toHaveURL('https://www.wikipedia.org/')
    //(2) toHavetitle
    await expect(page).toHaveTitle('Wikipedia')
    //(3) toBeVisible
    const LogoElement = await page.locator('.central-featured-logo')
    await expect(LogoElement).toBeVisible()
    //(4) isEnabled or Not
    const SearchBox =  await page.locator("//input[@id='searchInput']")
    await expect(SearchBox).toBeEnabled()
    //(5) isChecked
    await page.click("//strong[normalize-space()='English']")
    const Appearance = await page.locator("(//input[@id='skin-client-pref-vector-feature-custom-font-size-value-1'])[1]")
    await expect (Appearance).toBeChecked()
    //(6) to check a attribute of an element
    await expect(SearchBox).toHaveAttribute('type','search')
    //(7) to Have Text
    const SearchCTA = await page.getByRole('button', { name: 'Search' })
    await expect(SearchCTA).toHaveText("Search")
    //(8) to contain text 
    await expect(SearchCTA).toContainText("Sea")
    //(9) input has a valude
    await SearchBox.fill('Playwright');
    await expect(SearchBox).toHaveValue('Playwright')
    //(10) get count of value inside a dropdown
    /*await page.click("//input[@id='vector-page-tools-dropdown-checkbox']")
    const Tools = await page.locator("vector-page-tools-dropdown-checkbox")
    await expect(Tools).toHaveCount(26)*/
    
    //(11) to do negative test

    await expect(SearchBox).not.toHaveValue('test')






    




})