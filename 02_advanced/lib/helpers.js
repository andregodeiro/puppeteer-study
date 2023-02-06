module.exports = {
  click: async (page, selector) => {
    //create a method that will auto check the selector and click it
    try {
      await page.waitForSelector(selector);
      await page.click(selector);
    } catch (error) {
      throw new Error(`Could not click on selector: ${selector}`);
    }
  },
  getText: async (page, selector) => {
    //create a method that will auto check the selector and extract the text
    try {
      await page.waitForSelector(selector);
      return await page.$eval(selector, (element) => element.innerHTML);
    } catch (error) {
      throw new Error(`Cannot get text from selector: ${selector} `);
    }
  },
  getCount: async (page, selector) => {
    //create a method that will auto check the selector and extract length
    try {
      await page.waitForSelector(selector);
      return await page.$$eval(selector, (element) => element.length);
    } catch (error) {
      throw new Error(`Cannot get count of selector: ${selector}`);
    }
  },
};
