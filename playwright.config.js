const {defineConfig, devices} = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',
    reporter: 'allure-playwright',
    projects: [
        {
            name: 'chromium',
            use: {...devices['Desktop Chrome']},
        }
    ],
    use: {
        headless: false
    }
});

