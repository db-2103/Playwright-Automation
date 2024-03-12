const {test,expect} = require('@playwright/test')

test.only("Popup validation", async({page})=>
{
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
  //await page.goto("https://google.com")
  //await page.goBack();
  //await page.goForward();
  await expect(page.locator("#displayed-text")).toBeVisible();
  await page.locator("#hide-textbox").click();
  await expect(page.locator("#displayed-text")).toBeHidden();
  page.on('dailog',dailog =>dailog.accept());
  await page.locator("#confirmbtn").click();
  await page.locator("#mousehover").hover();
  //await page.locator(".mouse-hover-cotent a").click();
  const framespage = page.frameLocator("#courses-iframe");
  await framespage.locator("li a[href*='lifetime-access']:visible").click();
  const textCheck = await framespage.locator(".text h2").textContent();
  console.log(textCheck.split(" ")[1]);
})