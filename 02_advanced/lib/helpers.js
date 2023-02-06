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
  typeText: async (page, selector, text) => {
    //create a method that will auto check the selector and type some text into it
    try {
      await page.waitForSelector(selector);
      await page.type(selector, text);
    } catch (error) {
      throw new Error(`Could not type into selector: ${selector}`);
    }
  },
  waitForText: async (page, selector, text) => {
    //create a method that will check if the selector matches with text
    try {
      await page.waitForSelector(selector);
      await page.waitForFunction((selector, text) => {
        document.querySelector(selector).innerText.includes(text),
          {},
          selector,
          text;
      });
    } catch (error) {
      throw new Error(`Text: ${text} not found for selector: ${selector}`);
    }
  },
  shouldNotExist: async (page, selector, text) => {
    //create a method that will auto check the selector and type some text into it
    try {
      await page.waitForSelector(selector, { hidden: true, timeout: 300 });
    } catch (error) {
      throw new Error(`Selector: ${selector} is visible, bou should not be.`);
    }
  },
};
