const { chromium } = require("playwright");

(async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.lambdatest.com/selenium-playground");
    await page.pause();
    // Click "Input Form Submit" under "Input Forms"
    await page.click("#treemenu > li:nth-child(4) > ul > li:nth-child(2) > a");
    await page.waitForSelector("#contact_form");

    // Click "Submit" without filling in any information in the form
    await page.click("#contact_form > button");

    // Assert "Please fill in the fields" error message
    const errorMessage = await page.$eval("#contact_form > div:nth-child(1) > div > span", el => el.textContent);
    if (errorMessage !== "Please fill in the fields") {
        throw new Error(`Invalid error message: ${errorMessage}`);
    }

    // Fill in Name, Email, and other fields
    await page.fill("#contact_form > div:nth-child(2) > div > input", "John Doe");
    await page.fill("#contact_form > div:nth-child(3) > div > input", "john.doe@example.com");
    await page.fill("#contact_form > div:nth-child(4) > div > input", "+1 (202) 555-0123");
    await page.fill("#contact_form > div:nth-child(5) > div > input", "https://www.example.com");
    await page.fill("#contact_form > div:nth-child(6) > div > textarea", "Hello, I would like to inquire about...");

    // From the Country drop-down, select "United States" using the text property
    await page.selectOption("#contact_form > div:nth-child(7) > div > select", "United States");

    // Fill all fields and click "Submit"
    await page.click("#contact_form > button");

    // Once submitted, validate the success message "Thanks for contacting us, we will get back to you shortly." on the screen.
    const successMessage = await page.$eval("#contact_form > div:nth-child(1) > div > span", el => el.textContent);
    if (successMessage !== "Thanks for contacting us, we will get back to you shortly.") {
        throw new Error(`Invalid success message: ${successMessage}`);
    }

    await browser.close();
})();
