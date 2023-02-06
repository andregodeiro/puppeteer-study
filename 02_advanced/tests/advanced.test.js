const puppeteer = require("puppeteer");
const expect = require("chai").expect;
const {
  click,
  getText,
  getCount,
  typeText,
  waitForText,
  shouldNotExist,
} = require("../lib/helpers"); //import custom commands

describe("My first puppeteer test", () => {
  let browser;
  let page;

  before(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 10,
      devtools: false,
    });

    page = await browser.newPage();
  });

  after(async () => {
    await browser.close();
  });

  it("should launch the browser", async () => {
    await page.goto("http://google.com/");

    const text = await getText(page, ".gNO89b");
    const count = await getCount(page, ".gNO89b");

    await typeText(page, ".gNO89b", "github"); //will do the same as this block of code above.

    // await page.waitForXPath('//input[@class="gLFyf"]');
    // const input = await page.$x('//input[@class="gLFyf"]');
    // await input[0].type("github");

    await page.waitForXPath('//input[@value="Pesquisa Google"]');

    await click(page, ".gNO89b");

    await shouldNotExist(page, ".gNO89b"); //will check if the selector disapeared of the page

    await page.waitForTimeout(5000);
  });
});
