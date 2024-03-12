const {test, expect} = require('@playwright/test');


test('First playwright test' ,async ({browser})=>
{

  //chrome - Plugins/ cookies  

const context = await browser.newContext();
const page = await browser.newPage();
const username = page.locator('#username');
const signIn = page.locator("#signInBtn");
const cardTitles = page.locator(".card-body a");
await page.goto("https://rahulshettyacademy.com/loginpagePractise");
console.log(await page.title());
await username.fill("rahulshetty");
await page.locator("[type='password']").fill("learning");
await signIn.click();
console.log(await page.locator("[style*='block']").textContent());
await expect(page.locator("[style*='block']")).toContainText('Incorrect');

await username.fill("");
await username.fill("rahulshettyacademy");
await signIn.click();
console.log(await cardTitles.first().textContent());
console.log(await cardTitles.nth(1).textContent());
const allTitles = await cardTitles.allTextContents();
console.log(allTitles); 

});





test('UI Controls test',async({page})=>
{
  await page.goto("https://rahulshettyacademy.com/loginpagePractise");
  const username = page.locator('#username');
  const signIn = page.locator("#signInBtn");
  const dropDown = page.locator("select.form-control");
  const documentLink = page.locator("[href*='documents-request']");
  //await username.fill("rahulshetty");
  //await page.locator("[type='password']").fill("learning");
  //await signIn.click();
  await dropDown.selectOption("consult");

  await page.locator(".radiotextsty").last().click();
  await page.locator("#okayBtn").click();
  console.log(await page.locator(".radiotextsty").last().isChecked());
  await expect(page.locator(".radiotextsty").last()).toBeChecked();
  await page.locator("#terms").click();
  await expect(page.locator("#terms")).toBeChecked();
  await page.locator("#terms").uncheck();
  expect(await page.locator("#terms").isChecked()).toBeFalsy();
  
  await expect(documentLink).toHaveAttribute("class","blinkingText");
    //await page.pause();


});

test('Child Windows handling', async({browser})=>
{
  const context = await browser.newContext();
  const page = await context.newPage();
  const userName = await page.locator("#username");
  await page.goto("https://rahulshettyacademy.com/loginpagePractise");
  const documentLink = page.locator("[href*='documents-request']");

const [newPage] =await Promise.all(
  [
    context.waitForEvent('page'), //listen for new page 
    documentLink.click(),

  ]

)//new page is opened
 const text = await newPage.locator(".red").textContent();
 const arrayText = text.split("@")
 const domain = arrayText[1].split(" ")[0]
 console.log(domain);
 await userName.fill(domain);
 console.log(userName.textContent());





});