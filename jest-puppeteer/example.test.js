describe("Google test", () => {
  it("Should open Google homepage", async () => {
    jest.setTimeout(20000);

    await page.goto("http://google.com/");
    await page.waitForTimeout(3000);
  });
});
