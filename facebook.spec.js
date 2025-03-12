const { test, expect } = require('@playwright/test');

test('facebook', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
    await page.fill('//input[@id="email"]', 'testuser01');
    await page.fill('//input[@id="pass"]', 'password');
    await page.click('//div[@class="_6ltg"]//button');
    await page.waitForTimeout(5000);
    const date = new Date();
console.log(date);
// Format the date as YYYYMMDDHHMMSSSSS
const formattedDate = date.getFullYear().toString() +
  (date.getMonth() + 1).toString().padStart(2, '0') +
  date.getDate().toString().padStart(2, '0') +
  date.getHours().toString().padStart(2, '0') +
  date.getMinutes().toString().padStart(2, '0') +
  date.getSeconds().toString().padStart(2, '0') +
  date.getMilliseconds().toString().padStart(2, '0');


const screenshotpath = `C:\\Users\\3Frames\\Desktop\\internet-playwright\\Screenshots\\${formattedDate}.png`;
await page.screenshot({path: screenshotpath});
console.log(`Screenshot saved as: ${formattedDate}.png`);

await page.goBack();
await page.click('//div[@class="_6ltj"]//a')

await page.fill('//input[@id="identify_email"]','testuser01@gmail.com')
await page.click('//button[@id="did_submit"]')


const page1Promise = page.waitForEvent('popup');

await page.click('//button[text()="Continue"]')
await page.waitForTimeout(5000);
await page.screenshot({path: `C:\\Users\\3Frames\\Desktop\\internet-playwright\\Screenshots\\forgotpassword${formattedDate}.png`});

await page.waitForTimeout(5000);
// const [newWindow] = await Promise.all([
//     context.waitForEvent('page'),    // Step 5: Wait for the new page (window) to open
//    page.fill('','')// Replace this with the selector that opens the new window
//   ]);

const page1 = await page1Promise;
await page1.locator('//div[@class="Xb9hP"]//input[@type="email"]').fill("testuser001@gmail.com");
await page1.waitForTimeout(5000);

await page1.close();
await page.waitForTimeout(5000);
await page.quit();
})