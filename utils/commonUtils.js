const locators = require('../configuration/locators')
async function navigateToAmazonHome(page) {
  await page.goto('https://www.amazon.com/');
  await page.waitForSelector(locators.searchBoxXPath);
}

async function searchForProduct(page, productName) {
  await page.fill(locators.searchBoxXPath, productName);
  await page.press(locators.searchBoxXPath, 'Enter');
}

async function checkProductTitleInSearchResults(page, expectedTitle) {
  await page.waitForSelector(locators.productSearchResultXPath, { timeout: 60000 });
  const productTitle = await page.textContent(locators.productSearchResultXPath);
  return productTitle;
}

async function checkProductImages(page) {
  const images = await page.$$eval(locators.productImageXPath, imgs => imgs.length > 0);
  return images;
}

async function checkProductPrices(page) {
  const prices = await page.$$eval('span.a-price-whole', prices => prices.length > 0);
  return prices;
}

async function clickOnFirstProduct(page) {
  await page.click(locators.productSearchResultXPath);
}

module.exports = {
  navigateToAmazonHome,
  searchForProduct,
  checkProductTitleInSearchResults,
  checkProductImages,
  checkProductPrices,
  clickOnFirstProduct
};
