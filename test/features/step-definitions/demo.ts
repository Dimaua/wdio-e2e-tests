import { Given, When, Then } from "@wdio/cucumber-framework";


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
    await browser.waitUntil(async function(){
        return await browser.getTitle()==="WebdriverIO · Тестовий фреймворк наступного покоління для автоматизації браузерів та мобільних пристроїв у Node.js | WebdriverIO"
    },{timeout:20000,interval:500,timeoutMsg:"Failed loading WDIO"})
    let url = await browser.getUrl()
    console.log(`>>>>>>> : ${expectedURL}`);
    await expect(url).toEqual(expectedURL)
})

/** 
 * Web interactions
 */

Given(/^A web page is opened$/, async function () {
    await browser.url("https://the-internet.herokuapp.com/tables")
    await browser.setTimeout({ implicit: 15000, pageLoad: 10000 })
    //await browser.maximizeWindow()
})

When(/^Perform web inteactions$/, async function () {
    /* let num = 12315;
    let str = num.toString()
    let el = await $(`[type=number]`);
    //await el.setValue(str)
    await el.click();

    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i)
        await browser.pause(500)
        await browser.keys(char)
    }
    await browser.pause(3000); */

    /* let ele = await $("//select/option[@selected='selected']")
    let val = await ele.getText();
    await expect(val).toEqual('Please select an option1') */


    /* let ddEl = await $('#dropdown');
    //await ddEl.selectByVisibleText('Option 2')
    //await ddEl.selectByAttribute('value','1')
    await ddEl.selectByIndex(2) */


    //let checEl = await $$('//form[@id="checkboxes"]/input')
    /* if(!await checEl.isSelected()){
        await checEl.click();
    } */

    /* let isChecked = await checEl.isSelected();
    await expect(isChecked).toBeTruthy() */

    /* for (let i = 0; i < checEl.length; i++) {
        let el = checEl[i];
        if (!await el.isSelected()) {
            el.click()
        }
    } */

    //multy window
    //open new w
    /* await $(`=Click Here`).click();
    await $(`=Elemental Selenium`).click();

    let curTitle = await browser.getTitle();
    let parentWind = await browser.getWindowHandle()
    console.log('>>>>>>>>>>>' + curTitle);
 */
    //switch to window

    /* let winds = await browser.getWindowHandles()
    for(let i = 0; i<winds.length;i++){
        console.log(winds[i]);
        await browser.switchToWindow(winds[i])
        curTitle = await browser.getTitle();
        if(curTitle === "New Window"){
            await browser.switchToWindow(winds[i])
            let header = await $(`<h3>`).getText();
            console.log('>>>>>>>>' + header);
            break;
        }
    } */

    //switch to main w

    /*  await browser.switchToWindow(parentWind)
     let parentWindText = await $(`<h3>`).getText()
     console.log('>>>>>>' + parentWindText); */

    //alert
    /* await $(`button=Click for JS Prompt`).click();

    if (await browser.isAlertOpen()) {
       //await browser.dismissAlert()
       let alert = await browser.getAlertText()
       console.log('>>>>>>>' + alert);
await browser.sendAlertText('Hellooooooo')

       await browser.acceptAlert()
       
    }
console.log(process.cwd());
    await browser.pause(2000) */

    //rows and columns

    let row = await $$(`//table[@id="table1"]/tbody/tr`).length
    await expect(row).toEqual(4)

    console.log(row);

    let col = await $$(`//table[@id="table1"]/thead/tr/th`).length
    await expect(col).toEqual(6)
    console.log(col);

    //whole table
//let cellVal = await $(`//table[@id="table1"]/tbody/tr[2]/td[4]`).getText()
//console.log(cellVal);

let arr = [];
for (let i = 0; i < row; i++) {
    const obj = {
        lastname: "",
        firstname: "",
        email:"",
        due:"",
        web:""
    }
    for (let j = 0; j < col; j++) {
        let cellVal = await $(`//table[@id="table1"]/tbody/tr[${i+1}]/td[${j+1}]`).getText();
        let name = await $(`//table[@id="table1"]/tbody/tr[${i+1}]/td[2]`).getText();
        if(name === "Jason"){
        if(j===0) obj.firstname = cellVal;
        if(j===1) obj.lastname = cellVal;
        if(j===2) obj.email = cellVal;
        if(j===3) obj.due = cellVal;
        if(j===4) obj.web = cellVal;
        }              
    }
    if(obj.firstname){
        arr.push(obj); 
    }
      
}

console.log(arr);





})