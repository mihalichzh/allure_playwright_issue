const {test, expect} = require('@playwright/test');

["one", "two"].forEach(word => {
    test.describe(`parameterized describe - ${word}`, () => {
        test(`input word`, async ({page}) => {
            await page.goto('https://www.google.com/');

            await page.locator('[name=q]').fill(word);
        });
    })
});




