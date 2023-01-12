import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('test');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('test');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.locator('#cartur').click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  
  await page.getByLabel('Total: 360').click();
  await page.getByLabel('Total: 360').fill('sda');
  await page.getByLabel('Country:').click();
  await page.getByLabel('Country:').fill('dsad');
  await page.getByLabel('City:').click();
  await page.getByLabel('City:').fill('asdasd');
  await page.getByLabel('Credit card:').click();
  await page.getByLabel('Credit card:').fill('213214123124');
  await page.getByLabel('Month:').click();
  await page.getByLabel('Month:').fill('12');
  await page.getByLabel('Year:').click();
  await page.getByLabel('Year:').fill('2023');
  await page.getByRole('button', { name: 'Purchase' }).click();
await page.pause();
  await expect(page.locator('xpath=/html/body/div[10]/div[4]/div[1]')).toHaveClass('sa-placeholder');
  await expect(page.locator('text=Thank you for your purchase!')).toBeDefined;
  await page.getByRole('button', { name: 'OK' }).click();
});
