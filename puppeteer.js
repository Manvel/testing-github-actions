const puppeteer = require("puppeteer");
const assert = require("assert");

let browser;

describe("Test", () => {
  before(async () =>
  {
    browser = await puppeteer.launch({headless: false, args: ['--no-sandbox']});
  });
  it("testing", () =>
  {
    assert.equal(true, true);
  })
  after(async () =>
  {
    await browser.close();
  })
});
