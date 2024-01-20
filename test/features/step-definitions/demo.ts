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