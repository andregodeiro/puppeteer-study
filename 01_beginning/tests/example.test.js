const puppeteer = require('puppeteer');
const expect = require('chai').expect

describe('My first puppeteer test', () => {
    it('should launch the browser', async () => {
        const browser = await puppeteer.launch({headless: false, slowMo: 10, devtools: false})
        const page = await browser.newPage()

        await page.goto('http://google.com/')

        await page.waitForXPath('//input[@class="gLFyf"]')
        
        const input = await page.$x('//input[@class="gLFyf"]')
        await input[0].type('github')

        await page.waitForXPath('//input[@value="Pesquisa Google"]') 
        
        const button = await page.$x('//input[@value="Pesquisa Google"]')
        await button[0].click()

        await page.waitForFunction(() => !document.querySelector('.gNO89b')) //longer option

        await page.waitForSelector('.gNO89b', {hidden: true, timeout: 300   }) //shorter version

        
        await page.waitForTimeout(5000)

        await browser.close()
    })
})