const puppeteer = require('puppeteer');
const expect = require('chai').expect

describe('My first puppeteer test', () => {
    it('should launch the browser', async () => {
        const browser = await puppeteer.launch({headless: false, slowMo: 10, devtools: false})
        const page = await browser.newPage()

        await page.setDefaultTimeout(10000) //set a default timeout
        await page.setDefaultNavigationTimeout(20000) //this method has priority over setDefaultTimeout()

        await page.goto('http://google.com/')
        await page.waitForSelector('.gLFyf') //for preventing bugs, its always good to wait for the selector that you want to use
        await page.type('.gLFyf', 'github') //selector then the thext you ant to type
        await page.keyboard.press('Enter', {delay: 1000}) //choose the key to press and set a delet to the action
        await page.waitForTimeout(5000)

        await browser.close()
    })
})