const puppeteer = require('puppeteer');
const expect = require('chai').expect

describe('My first puppeteer test', () => {
    it('should launch the browser', async () => {
        const browser = await puppeteer.launch({headless: true, slowMo: 10, devtools: false})
        const page = await browser.newPage()
        await page.goto('http://example.com/')
        const title = await page.title()
        const url = await page.url()
        const text = await page.$eval('h1', element => element.textContent)
        const count = await page.$$eval('p', element => element.length)

        expect(title).to.be.a('string', 'Example Domain') //compare type and string content
        expect(url).to.include('example.com') //compare if the url includes something
        expect(text).to.to.be.a('string', 'Example Doimain')
        expect(count).to.equal(2) //compare if the count number its 2

        await browser.close()
    })
})