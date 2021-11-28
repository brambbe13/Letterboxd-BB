import { BasePage } from "./pageObjects/pageObjects"; 
import { By, until,  } from "selenium-webdriver";
import * as signInData from "./signInData.json"
const fs = require("fs");

export class filmPage extends BasePage {
    constructor(driver, url,) {
      super(driver, url)
      
    }
    //Sign in selectors
    SignInInput: By = By.css('a[href="/sign-in/"]') //$$('a[href="/sign-in/"]')
    usernameField: By =By.css('input[type="email"]') //$$('input[type="email"]')
    passwordField: By = By.css('input[type="password"]') //$$('input[type="password"]')
    SignInButton: By = By.css('input[value="Sign in"]') //$$('input[value="Sign in"]')
    //Profile selectors
    myLists: By = By.css('a[href="/lists/"]') //$$('a[href="/lists/"]')
    accountDropdown: By = By.xpath('(//a[@class="has-icon toggle-menu"])[0]') //$$('a[class="has-icon toggle-menu"]')[0] or $x('//a[@class="has-icon toggle-menu"]')[0]
    userProfile: By = By.xpath('(//a[@href="/bbrambila23/"])[0]') //$x('//a[@href="/bbrambila23/"]')[0]
    profileFilms: By = By.css('a[href="/bbrambila23/films/"]') //$$('a[href="/bbrambila23/films/"]')
    //Selectors for Film test
    searchIcon: By = By.css('(a[href="#"])[3]') //$$('a[href="#"]')[3]
    searchBar: By = By.css('input[id="search-q"]')  //$$('input[id="search-q"]')
    results: By = By.css('') //

      //navigating to the url
      async navigate() {
        await this.driver.get(this.url);
      };
      //sign in
      async signIn(): Promise<void> {
        await this.driver.wait(until.elementLocated(this.SignInInput));
        await this.driver.findElement(this.SignInInput).click();
        await this.driver.sleep(1000)
        await this.driver.findElement(this.usernameField).sendKeys(signInData.username);
        await this.driver.sleep(1000)
        await (await this.driver.findElement(this.passwordField)).sendKeys(signInData.password);
        await (await this.driver.findElement(this.SignInButton)).click();
        return await this.driver.wait(until.elementLocated(this.userProfile)).click();
      };

      // async myProfile(): Promise<void>{
      //   await this.driver.wait(until.elementLocated(this.accountDropdown));
      //   await (await this.driver.findElement(this.accountDropdown)).click();
      //   await this.driver.wait(until.elementLocated(this.userProfile));
      //   await (await this.driver.findElement(this.userProfile)).click();
      // }
      
      
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
      async findElement(elementBy: By,){
        await this.driver.wait(until.elementLocated(elementBy));
        await this.driver.findElement(elementBy).click();
  
      };
      async doSearch(text: string) {
        return this.sendKeys(this.searchBar, `${text}\n`);
      }
      async getResults() {
        return this.getText(this.results);
      }
      async getText(elementBy: By){
        await this.driver.wait(until.elementLocated(this.searchBar));
        return (await this.driver.findElement(elementBy)).getText();
      };
      
      
  
  }