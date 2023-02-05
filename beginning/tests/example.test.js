const puppeteer = require('puppeteer');
const expect = require('chai').expect

describe('My first puppeteer test', () => {
    it('should launch the browser', async () => {
        const browser = await puppeteer.launch({headless: false, slowMo: 10, devtools: false})
        const page = await browser.newPage()

        await page.setDefaultTimeout(10000)
        await page.setDefaultNavigationTimeout(20000)

        await page.goto('http://google.com/')

        await page.waitForXPath('//input[@class="gLFyf"]') //here is an exemple of how to use XPath on puppeteer
        
        const input = await page.$x('//input[@class="gLFyf"]') //the method $x() its used to catch a XPath address
        await input[0].type('github')  //here we catch the first array element, even if input returns only one element

        await page.keyboard.press('Enter', {delay: 1000}) 
        await page.waitForTimeout(5000)

        await browser.close()
    })
})