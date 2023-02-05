const puppeteer = require('puppeteer');

describe('My frist puppeteer test', () => {
    it('should launch the browser', async () => {
        const browser = await puppeteer.launch({headless: false, slowMo: 10, devtools: false})
        const page = await browser.newPage()
        await page.goto('http://example.com/')
        await page.waitForTimeout(3000)
        await page.waitForSelector('h1')
        await page.reload()
        await page.waitForTimeout(3000)
        await page.waitForSelector('h1')
        await browser.close()
    })
})