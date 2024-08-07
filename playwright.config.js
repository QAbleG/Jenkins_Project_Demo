const { devices } = require('@playwright/test');

module.exports = {
    use: {
        baseURL: 'https://www.amazon.in',
        navigationTimeout: 100000,
        timeout: 60000,
        actionTimeout: 10000,
        viewport: { width: 1280, height: 720 },
        headless: true,
        trace: 'on',
    },
    projects: [
        {
            name: 'Chromium',
            use: {
                browserName: 'chromium', // Use the Chromium browser
            },
        },
        {
            name: 'edge',
            use: {
                channel: 'msedge', // Use the Edge browser
            },
        },
        {
            name: 'Firefox',
            use: {
                browserName: 'firefox', // Use the firefox browser
            },
        },
    ],
    workers: 3,
    reporter: [
        ['list'],
        ['html', { outputFolder: 'playwright-report', open: 'never' }]
    ],
    
    screenshots: 'on',
};
