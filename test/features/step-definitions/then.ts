import { Then } from "@wdio/cucumber-framework";

Then(/^Inventory page should list (.*)$/,async function(numOfProducts){
if(!numOfProducts) throw Error(`Invalid num`)
let arrItms = await $$(`.inventory_item_name`);
await expect(arrItms.length).toEqual(parseInt(numOfProducts))
})

Then(/^Validate all products have valid price$/, async function(){
    let arr = [];
    let arrPrice = await $$(`.inventory_item_price`);
    for(let i = 0; i<arrPrice.length;i++){
        let strPrice = await arrPrice[i].getText()
        arr.push(strPrice)
    }
    console.log('>>>>>>>>>>>>' + arr);

    const priceArr = arr.map(el=>+(el.replace('$','')))
    console.log(priceArr);

    priceArr.filter(el => el<=0)
})