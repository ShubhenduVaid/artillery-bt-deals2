const puppeteer = require("puppeteer");

const URL =
  "https://broadband.frontend.dev.digital-ent-int.bt.com/products/broadband-and-internet/deals2";
const DURATION = 5000;
const INSTANCES = 20;

async function startBB() {
  try {
    const browser = await puppeteer.launch({
      headless: false,
    });
    const page = await browser.newPage();
    await page.goto(URL);
    setTimeout(() => {
      browser.close();
    }, DURATION);
  } catch (error) {
    console.log("ERROR", error);
  }
}

async function main() {
  for (let index = 0; index < INSTANCES; index++) {
    startBB();
  }
}

main();
