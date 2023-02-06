const puppeteer = require('puppeteer')

describe('open github and sign in', () => {
    it('should launch github', async () => {
        const browser = await puppeteer.launch({headless: false, defaultViewport: null})
        const page = await browser.newPage()

        await page.goto('http://github.com')
        
        await page.waitForXPath('//a[contains(text(), "Sign in")]')
        const signIn = await page.$x('//a[contains(text(), "Sign in")]')
        await signIn[0].click()

        await page.waitForXPath('//h1[@value="Sign in to GitHub"]')

        await page.waitForTimeout(3000)

        await browser.close()

    

    })
})