const puppeteer = require("puppeteer");

describe("Device Emulation", () => {
  let browser;
  let page;

  before(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 10,
      devtools: false,
    });

    page = await browser.newPage();
    await page.setDefaultTimeout(10000);
    await page.setDefaultNavigationTimeout(20000);
  });

  after(async () => {
    await browser.close();
  });

  it("Desktop device test", async () => {
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto("https://example.com/");
    await page.waitForTimeout(5000);
  });
  it("Tablet device test", async () => {
    const tablet = puppeteer.devices["iPad landscape"];
    await page.emulate(tablet);
    await page.goto("https://example.com/");
    await page.waitForTimeout(5000);
  });
  it("Mobile device test", async () => {
    const mobile = puppeteer.devices["iPhone X"];
    await page.emulate(mobile);
    await page.goto("https://example.com/");
    await page.waitForTimeout(5000);
  });
});
