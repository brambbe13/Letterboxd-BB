import { BasePage, Options } from "./pageObjects2"; 
import { By, until,  } from "selenium-webdriver";
const fs = require("fs");


export class filmPage extends BasePage {
    constructor(options?:Options) {
      super(options)
      this.url = "https://letterboxd.com/"
      
    } 
    
    //Sign in selectors
    SignInInput: By = By.css('a[href="/sign-in/"]') //$$('a[href="/sign-in/"]')
    usernameField: By =By.css('input[type="email"]') //$$('input[type="email"]')
    passwordField: By = By.css('input[type="password"]') //$$('input[type="password"]')
    SignInButton: By = By.css('input[value="Sign in"]') //$$('input[value="Sign in"]')
    hoverMenu: By =By.xpath('//li[@class="navitem nav-account js-nav-account"]') //$x('//li[@class="navitem nav-account js-nav-account"]')
    SignOut: By =By.xpath('//a[@id="sign-out"]') //$x('//a[@id="sign-out"]')
    //Selectors for Search Bar test
    houseOfGucci: By =By.xpath('//a[@href="/film/house-of-gucci/"][@class="frame has-menu"]') //$x('//a[@href="/film/house-of-gucci/"][@class="frame has-menu"]')(
    spencer: By = By.xpath('//span[@class="film-title-wrapper"]//a[@href="/film/spencer-2021/"]') //$x('//span[@class="film-title-wrapper"]//a[@href="/film/spencer-2021/"]')
    searchBar: By =By.xpath('//input[@name="q"]') //$x('//input[@name="q"]')
    shangChi: By = By.xpath('//span[@class="film-title-wrapper"]//a[@href="/film/shang-chi-and-the-legend-of-the-ten-rings/"]') //$x('//span[@class="film-title-wrapper"]//a[@href="/film/shang-chi-and-the-legend-of-the-ten-rings/"]')

      //navigating to the url
      async navigate() {
        await this.driver.get(this.url);
      };
      //Sign In to user account
      async SignIn( a: string, b: string ): Promise<void> {
        await this.driver.wait(until.elementLocated(this.SignInInput));
        await this.driver.findElement(this.SignInInput).click();
        await this.driver.sleep(1000)
        await this.setInput(this.usernameField, a)
        await this.driver.sleep(1000)
        await this.setInput(this.passwordField, b)
        await (await this.driver.findElement(this.SignInButton)).click();
      };
      //Find and click on an element
      async findAndClick(elementBy) {
        await this.driver.wait(until.elementLocated(elementBy));
        await this.driver.findElement(elementBy).click();
      }
      async takeScreenshot(filepath: string) {
        fs.writeFile(
          `${filepath}.png`,
          await this.driver.takeScreenshot(),
          "base64",
          (e) => {
            if (e) console.log(e);
            else console.log("screenshot saved successfully");
          }
        );
      };
      async sendKeys(elementBy: By, keys ) {
        await this.driver.wait(until.elementLocated(elementBy));
        return this.driver.findElement(elementBy).sendKeys(keys);
      };
      //Do search function for forLoop that tests film titles
      async doSearch(elementBy, text: string, ) {
        await this.driver.wait(until.elementLocated(elementBy)).clear();
        return this.sendKeys((elementBy), `${text}\n`);
      }
  }