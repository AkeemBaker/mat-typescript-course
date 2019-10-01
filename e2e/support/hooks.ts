import { After, Before, Status } from "cucumber";
import { browser } from "protractor";

Before({timeout: 100 * 1000}, async function()
{
    await browser.get("");
});

After({timeout: 100 * 1000}, async function(scenario)
{
    if (scenario.result.status === Status.FAILED)
        {
            const screenShot = await browser.takeScreenshot();
            this.attach(screenShot, "image/png");
        }
});
