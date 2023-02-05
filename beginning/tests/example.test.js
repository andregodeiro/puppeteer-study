const puppeteer = require('puppeteer');
const expect = require('chai').expect

describe('My first puppeteer test', () => {
    it('should launch the browser', async () => {
        const browser = await puppeteer.launch({headless: false, slowMo: 10, devtools: false})
        const page = await browser.newPage()

        await page.setDefaultTimeout(10000) //set a default timeout
        await page.setDefaultNavigationTimeout(20000) //this method has priority over setDefaultTimeout()

        await page.goto('http://google.com/')

        await page.waitForXPath('//input[@Class="gLFyf"]') //here is and exemple of how to use XPath on puppeteer
        
        await page.type('.gLFyf', 'github') 
        await page.keyboard.press('Enter', {delay: 1000}) 
        await page.waitForTimeout(5000)

        await browser.close()
    })
})