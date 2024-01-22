import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from 'chai'

Given(/^Google page is opened$/, async function () {
    await browser.url("https://www.google.com")
    await browser.pause(1000)
})

When(/^Search with (.*)$/, async function (searchItem) {
    console.log(`>>searchItem: ${searchItem}`);
    let elem = await $(`[name = q]`)
    await elem.setValue(searchItem)
    await browser.keys("Enter")
})
Then(/^Click on the first search result$/, async function () {
    let elem = await $(`<h3>`)
    await elem.click()
})
Then(/^URL should match (.*)$/, async function (expectedURL) {
    let url = await browser.getUrl()
    console.log(`>>>>>>> : ${expectedURL}`);
    await expect(url).toEqual(expectedURL)
})

/** 
 * Web interactions
 */

Given(/^A web page is opened$/, async function () {
    await browser.url("/inputs")
    await browser.setTimeout({ implicit: 15000, pageLoad: 10000 })
    //await browser.maximizeWindow()
})

When(/^Perform web inteactions$/, async function () {
    let num = 12315;
    let str = num.toString()
    let el = await $(`[type=number]`);
    //await el.setValue(str)
    await el.click();

    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i)
        await browser.pause(500)
        await browser.keys(char)
    }
    await browser.pause(3000);


})