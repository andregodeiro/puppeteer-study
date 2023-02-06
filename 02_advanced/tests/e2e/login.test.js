const puppeteer = require("puppeteer");
require("dotenv").config();

describe("Login test", () => {
  let broser;
  let page;

  before(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 10,
      devtools: false,
      defaultViewport: null,
      args: ["--start-maximized"],
    });

    page = await browser.newPage();
    await page.setDefaultTimeout(10000);
    await page.setDefaultNavigationTimeout(20000);
  });

  after(async () => {
    await browser.close();
  });

  it("Login test - invalid credentials", async () => {
    await page.goto("http://github.com/");

    await page.waitForXPath('//a[contains(text(), "Sign in")]');
    const signIn = await page.$x('//a[contains(text(), "Sign in")]');
    await signIn[0].click();

    await page.waitForXPath('//input[@id="login_field"]');
    const login_field = await page.$x('//input[@id="login_field"]');
    await login_field[0].type("email@teste.com");

    await page.waitForXPath('//input[@id="password"]');
    const password = await page.$x('//input[@id="password"]');
    await password[0].type("passwordteste");

    await page.waitForXPath('//input[@value="Sign in"]');
    const signInButton = await page.$x('//input[@value="Sign in"]');
    await signInButton[0].click();

    await page.waitForXPath('//div[@class="js-flash-alert"]');
  });

  it("Login test - valid credentials", async () => {
    const git_email = process.env.EMAIL;
    const git_password = process.env.PASSWORD;

    await page.goto("http://github.com/");

    await page.waitForXPath('//a[contains(text(), "Sign in")]');
    const signIn = await page.$x('//a[contains(text(), "Sign in")]');
    await signIn[0].click();

    await page.waitForXPath('//input[@id="login_field"]');
    const login_field = await page.$x('//input[@id="login_field"]');
    await login_field[0].type(`${git_email}`);

    await page.waitForXPath('//input[@id="password"]');
    const password = await page.$x('//input[@id="password"]');
    await password[0].type(`${git_password}`);

    await page.waitForXPath('//input[@value="Sign in"]');
    const signInButton = await page.$x('//input[@value="Sign in"]');
    await signInButton[0].click();

    await page.waitForXPath('//span[@class="dropdown-caret"]');
  });
});
