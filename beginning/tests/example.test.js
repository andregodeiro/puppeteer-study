const puppeteer = require('puppeteer');

describe('My frist puppeteer test', () => {
    it('should launch the browser', async () => {
        const browser = await puppeteer.launch({headless: false, slowMo: 10, devtools: false})
        const page = await browser.newPage()
        await page.goto('https://devexpress.github.io/testcafe/example/')
        await page.type('#developer-name', 'Godeiro', {delay: 0})
        await page.click('#tried-test-cafe')
        await page.select('#preferred-interface', 'JavaScript API')
        const message = 'lets fill the message with some text' //you can store the message in a const or pass it as the second argument after the selector
        await page.type('#comments', message)
        await page.click('#submit-button')
        await page.waitForSelector('.result-content')
        await page.waitForTimeout(5000)
        await browser.close()
    })
})