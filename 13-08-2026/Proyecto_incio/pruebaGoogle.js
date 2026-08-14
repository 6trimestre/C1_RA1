const { Builder } = require("selenium-webdriver");
async function pruebaGoogle() {
    let driver = await new Builder()
        .forBrowser("chrome")
        .build();
    try {
        await driver.get("https://www.google.com");
        console.log("Google se abrió correctamente");
    } finally {
        await driver.quit();
    }
}
pruebaGoogle();