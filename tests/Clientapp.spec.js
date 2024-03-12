const { test, expect } = require('@playwright/test');



test('Practice playwright test' ,async ({page})=>
{

const userEmail = page.locator('#userEmail');
const products = page.locator('.card-body');
const email = "systestenv04@gmil.com";
const productName = 'ZARA COAT 3';
//const signIn = page.locator("#signInBtn");
//const cardTitles = page.locator(".card-body b");
await page.goto("https://rahulshettyacademy.com/client");
console.log(await page.title());
await userEmail.fill(email);
await page.locator('#userPassword').fill("Systest@env04");
await page.locator("[value ='Login']").click();
await page.waitForLoadState('networkidle'); 
await page.locator(".card-body b").first().waitFor();
console.log(await page.locator(".card-body b").allTextContents());

const count = await products.count();
//Zara coat 3
for (let i =0; i < count; ++i)
{
if(await products.nth(i).locator("b").textContent() === productName)
{
   await products.nth(i).locator("text = Add To Cart").click();
   break;
}
}
await page.locator("[routerlink*='cart']").click();
await page.locator("div li").first().waitFor(); // to wait for all elements loaded before check as isVisible method is not doing it autmatically.
const bool = page.locator("h3:has-text('productName')").isVisible();
expect(bool).toBeTruthy();
await page.locator("text=Checkout").click();

await page.locator(".small [type = 'text']").first().fill("123");
await page.locator(".field [type = 'text']").nth(3).fill("Dhara");
//await page.locator(".small [name='coupon']").fill("Discount");
//await page.locator(".btn-primary").click();
//await page.locator("btn-primary").waitFor();

await page.locator("[placeholder*='Country']").pressSequentially("ind");
const dropdown = page.locator(".ta-results");
await dropdown.waitFor();
const optionsCount = await dropdown.locator("button").count();
for (let i = 0; i < optionsCount; ++i)
{
 const text = await dropdown.locator("button").nth(i).textContent();
   if (text === " India")
  {
      await dropdown.locator("button").nth(i).click();
      break;
}
}

expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
await page.locator(".action__submit").click();
await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
console.log(orderId);

await page.locator("button[routerlink*='myorders']").click();
await page.locator("tbody").waitFor();
 const rows = await page.locator("tbody tr");
 
 for(let i=0; i<await rows.count(); ++i)
 
 {
   const rowOrderId = await rows.nth(i).locator("th").textContent();
   if(orderId.includes(rowOrderId))
   {
      await rows.nth(i).locator("button").first().click();
      break;
   }
 }

 const OrderIdHis = await page.locator(".col-text").textContent();
 expect(orderId.includes(OrderIdHis)).toBeTruthy();


});


 
 
 
 
