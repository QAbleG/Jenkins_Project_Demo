const { test, expect } = require('@playwright/test');
const { navigateToAmazonHome, searchForProduct, checkProductTitleInSearchResults, checkProductImages, checkProductPrices, clickOnFirstProduct } = require('../utils/commonUtils');
const locators = require('../configuration/locators');

test.describe('Amazon Search Tests Group 2', () => {

  test('Verify Product Title Contains iPhone 14', async ({ page }) => {
    await navigateToAmazonHome(page);
    await searchForProduct(page, 'iPhone 14');
    await page.waitForTimeout(5000); // Wait for search results to load
    const productTitle = await checkProductTitleInSearchResults(page, 'iPhone 14');
    expect(productTitle).toContain('iPhone 14');
  });

  test('Verify Product Prices are Displayed', async ({ page }) => {
    await navigateToAmazonHome(page);
    await searchForProduct(page, 'iPhone 14');
    await page.waitForTimeout(5000); // Wait for search results to load
    const pricesDisplayed = await checkProductPrices(page);
    expect(pricesDisplayed).toBeTruthy();
  });

  test('Verify Click on a Product Navigates to Product Page', async ({ page }) => {
    await navigateToAmazonHome(page);
    await searchForProduct(page, 'iPhone 14');
    await page.waitForTimeout(5000); // Wait for search results to load
    await clickOnFirstProduct(page);
    expect(await page.url()).toContain('/dp/');
  });

});
