const puppeteer = require("puppeteer");
require("dotenv").config();

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

describe("open github and sign in", () => {
  it("should launch github", async () => {
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: { width: 1920, height: 1080 },
      args: ["--start-maximized"],
      slowMo: 100,
    });
    const page = await browser.newPage();

    await page.goto("http://github.com");

    await page.waitForXPath('//a[contains(text(), "Sign in")]');
    const signIn = await page.$x('//a[contains(text(), "Sign in")]');
    await signIn[0].click();

    await page.waitForXPath('//input[@id="login_field"]');
    const login_field = await page.$x('//input[@id="login_field"]');
    await login_field[0].type(`${email}`);

    await page.waitForTimeout(3000);

    await browser.close();
  });
});
