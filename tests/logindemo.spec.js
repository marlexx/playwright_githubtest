import { test, expect } from '@playwright/test'

test('Demo Login 1', async ({ page }) => {
    await page.goto('https://demo.applitools.com/');
    await page.pause();

    await page.getByPlaceholder('Enter your username').fill('test');
    await page.getByPlaceholder('Enter your password').fill('test');
    await page.getByRole('link', { name: 'Sign in' }).click();

    await expect(page.getByRole('link', { name: 'ACME' })).toBeVisible();
})

test('Demo Login 2', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.pause();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.locator('xpath=//*[@id="app"]/div[1]/div[1]/header/div[1]/div[2]/ul/li/span/p').click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();

    await page.close();
})

test.only('Login demo  3', async ({ page }) => {
    await page.goto('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F');
    await page.pause();
    await page.locator('input[name="Email"]').click();
    await page.locator('input[name="Email"]').press('Control+a');
    await page.locator('input[name="Email"]').fill('admin@yourstore.com');
    await page.locator('input[name="Password"]').click();
    await page.locator('input[name="Password"]').press('Control+a');
    await page.locator('input[name="Password"]').fill('admin');
    await page.locator('text=Log in').click();
    await page.locator('#nopSideBarPusher i').click();
    await page.locator('text=Logout').click();
    await page.waitForURL('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F');
    await page.close();
 })