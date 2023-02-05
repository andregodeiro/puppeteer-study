const puppeteer = require('puppeteer');

describe('My frist puppeteer test', () => {
    it('should launch the browser', async () => {
        const browser = await puppeteer.launch({headless: false, slowMo: 10, devtools: false})
        const page = await browser.newPage()
        await page.goto('http://example.com/')
        const title = await page.title()
        const url = await page.url()

        console.log('Title: ' + title)
        console.log('URL: ' + url)
        await browser.close()
    })
})