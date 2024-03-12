const { test, expect } = require('@playwright/test');



test('Successful User login' ,async ({page})=>
{

    
await page.goto('https://nam10.safelinks.protection.outlook.com/?url=https%3A%2F%2Fecommerce-playground.lambdatest.io%2Findex.php%3Froute%3Dcommon%2Fhome&data=05%7C02%7Cdharab%40crosslaketech.com%7Cee57e4275f114840703e08dc3cf27e14%7Ca0effc3b4ee44a469dcc89fd35b439f6%7C1%7C0%7C638452259446185274%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&sdata=PkmN%2FGRaV42xfbz%2BTM7tdewcBIToeRXMERDhszj6%2FiU%3D&reserved=0')
await page.getByRole('button', {name: 'My account'}).click();
await page.getByPlaceholder('E-Mail Address').fill('systest.env04@gmail.com');
await page.getByPlaceholder('Password').fill('Systest@04');
await page.getByRole('button', {name: 'Login'}).click();
await page.locator("[href*='https://ecommerce-playground.lambdatest.io/index.php?route=account/edit']").nth(0).click();
await expect(page.locator('#input-email')).toHaveValue('systest.env04@gmail.com');

});


test('Unsuccessful User login' ,async ({page})=>
{
    
await page.goto('https://nam10.safelinks.protection.outlook.com/?url=https%3A%2F%2Fecommerce-playground.lambdatest.io%2Findex.php%3Froute%3Dcommon%2Fhome&data=05%7C02%7Cdharab%40crosslaketech.com%7Cee57e4275f114840703e08dc3cf27e14%7Ca0effc3b4ee44a469dcc89fd35b439f6%7C1%7C0%7C638452259446185274%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&sdata=PkmN%2FGRaV42xfbz%2BTM7tdewcBIToeRXMERDhszj6%2FiU%3D&reserved=0')
await page.getByRole('button', {name: 'My account'}).click();
await page.getByPlaceholder('E-Mail Address').fill('systest.env04@gmail.com');
await page.getByPlaceholder('Password').fill('Password');
await page.getByRole('button', {name: 'Login'}).click();
const warning = await page.locator('.alert').nth(1).allTextContents();
console.log(warning);

});


test('Product add to the Basket' ,async ({page})=>
{

await page.goto('https://nam10.safelinks.protection.outlook.com/?url=https%3A%2F%2Fecommerce-playground.lambdatest.io%2Findex.php%3Froute%3Dcommon%2Fhome&data=05%7C02%7Cdharab%40crosslaketech.com%7Cee57e4275f114840703e08dc3cf27e14%7Ca0effc3b4ee44a469dcc89fd35b439f6%7C1%7C0%7C638452259446185274%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&sdata=PkmN%2FGRaV42xfbz%2BTM7tdewcBIToeRXMERDhszj6%2FiU%3D&reserved=0')
await page.getByRole('button', {name: 'My account'}).click();
await page.getByPlaceholder('E-Mail Address').fill('systest.env04@gmail.com');
await page.getByPlaceholder('Password').fill('Systest@04');
await page.getByRole('button', {name: 'Login'}).click();

await page.getByPlaceholder('Search For Products').nth(0).fill('HTC Touch HD');
await page.getByRole('button', {name: 'Search'}).click();
//expect(page.locator('.price-new').nth(1)).toHaveValue(price);
await page.locator('.product-thumb-top').nth(0).hover();
await page.locator('.product-action [title = "Add to Cart"]').nth(0).click();
await page.locator('.cart-icon').nth(0).click();
expect(await page.locator('.table a').nth(1)).toBeTruthy();
console.log (await page.locator('.table a').nth(1).allTextContents());
//await page.pause();



});