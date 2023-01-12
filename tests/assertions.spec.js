import test, {page, expect} from '@playwright/test'

test('assertions demo', async({page}) => {
    await page.goto('https://kitchen.applitools.com');
    await page.pause();

    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1);
    
    if(await page.$('text=The Kitchen')){
        await page.locator('text=The Kitchen').click();
    }

   // await expect.soft(page.locator('text=The Kitchen')).toBeDisabled();

    await expect(page.locator('text=The Kitchen')).toBeVisible();    

   // await expect.soft(page.locator('text=The Kitchen')).not.toContainText('chen');  
    
    await expect(page).toHaveTitle(/.*Kitchen/);

    await expect(page).toHaveScreenshot();
})