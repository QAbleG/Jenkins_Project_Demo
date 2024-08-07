const { test, expect } = require('@playwright/test');
const { navigateToAmazonHome, searchForProduct, checkProductTitleInSearchResults, checkProductImages, checkProductPrices, clickOnFirstProduct } = require('../utils/commonUtils');
const locators = require('../configuration/locators');

test.describe('Amazon Search Tests Group 1', () => {

  test('Navigate to Amazon Homepage', async ({ page }) => {
    await navigateToAmazonHome(page);
    expect(await page.title()).toBe('Amazon.com. Spend less. Smile more.');
  });

  test('Perform Search for iPhone 14', async ({ page }) => {
    await navigateToAmazonHome(page);
    await searchForProduct(page, 'iPhone 14');
    await page.waitForTimeout(5000); 
    expect(await page.title()).toContain('iPhone 14');
  });

  test('Verify Search Results Contain iPhone 14', async ({ page }) => {
    await navigateToAmazonHome(page);
    await searchForProduct(page, 'iPhone 14');
    await page.waitForTimeout(5000);
    const productTitle = await checkProductTitleInSearchResults(page, 'iPhone 14');
    expect(productTitle).toContain('iPhone 14');
  });

  test('Verify Product Image is Displayed', async ({ page }) => {
    await navigateToAmazonHome(page);
    await searchForProduct(page, 'iPhone 14');
    await page.waitForTimeout(5000); 
    const imageDisplayed = await checkProductImages(page);
    expect(imageDisplayed).toBeTruthy();
  });

});
