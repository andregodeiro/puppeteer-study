const puppeteer = require('puppeteer');

describe('My frist puppeteer test', () => {
    it('should launch the browser', async () => {
        const browser = await puppeteer.launch({headless: false, slowMo: 10, devtools: false})
        const page = await browser.newPage()
        await page.goto('http://example.com/')
        const title = await page.title()
        const url = await page.url()
        const text = await page.$eval('h1', element => element.textContent)
        const count = await page.$$eval('p', element => element.length) // the double $$ means that we are selecting multiple elements

        console.log('Number of p tags on the page: ' + count)
        console.log('Text in h1: ' + text)
        await browser.close()
    })
})