import {Given} from "@wdio/cucumber-framework";
import sauseHomePage from "../../page-objects/sause.home.page";

Given(/^Login to inventory web app?/, async function(){
    await browser.url("https://www.saucedemo.com")
    await browser.setTimeout({ implicit: 15000, pageLoad: 10000 })

    await $(`#user-name`).setValue("standard_user")
    await $(`#password`).setValue("secret_sauce")
    await $(`#login-button`).click();
    await browser.pause(2000)

   //await sauseHomePage.navigateTo("https://www.saucedemo.com")
   //await sauseHomePage.loginToSauseApp("standard_user","secret_sauce")
})

//table[@id="table1"]/tbody/tr[2]