import { BasePage, Options } from "./pageObjects2"; 
import { By, until,  } from "selenium-webdriver";
import * as signInData from "../signInData.json"
const fs = require("fs");

export class filmPage extends BasePage {
    constructor(options?:Options) {
      super(options)
      this.url = "https://letterboxd.com/"
      
    } 
    
    //Create an account
    createAccountButton: By = By.xpath('(//a[@href="/create-account/"])[1]') //$x('(//a[@href="/create-account/"])[1]')
    emailAddress: By =By.xpath('//label[text()="Email address"]/input[@type="email"]') //'(//input[@inputmode="email"])[5]')$x( was 18 before
    newUserName: By = By.xpath('//input[@name="username"][@class="field -reversed -medium field-medium ac_input"][@maxlength="15"]') //$x('//input[@name="username"][@class="field -reversed -medium field-medium ac_input"][@maxlength="15"]')
    newPassword: By = By.xpath('//label[text()="Password"]/input[@type="password"]') //$x('//label[text()="Password"]/input[@type="password"]')
    firstCheckbox: By = By.xpath('(//label[@class="option-label -checkbox -default -reversed"]//input[@name="termsAndAge"])[16]') //$x('//label[@class="option-label -checkbox -default -reversed"]//input[@name="termsAndAge"]')[16]
    secondCheckbox: By = By.xpath('(//input[@name="acceptPrivacyPolicy"])[16]') //$x('//input[@name="acceptPrivacyPolicy"]')[16]
    thirdCheckbox: By = By.css('div[class="recaptcha-checkbox-checkmark"]') //$$('div[class="recaptcha-checkbox-checkmark"]')
    SignUp: By =By.xpath('(//input[@class="signup-button button -action button-action"])[1]') //$x('//input[@class="signup-button button -action button-action"]')[1]
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
    houseOfGucci: By =By.xpath('//a[@href="/film/house-of-gucci/"][@class="frame has-menu"]') //$x('//a[@href="/film/house-of-gucci/"][@class="frame has-menu"]')(
    searchIcon: By = By.css('a[class="replace"]') //$$('a[href="#"]')[3]
    searchBar: By = By.css('input[id="search-q"]')  //$$('input[id="search-q"]')
    results: By = By.css('') //
    //Watchlist selectors
    spencer: By = By.xpath('//a[@href="/film/spencer-2021/"][@title="Spencer (2021)"]') //$x('//a[@href="/film/spencer-2021/"][@title="Spencer (2021)"]')

      //navigating to the url
      async navigate() {
        await this.driver.get(this.url);
      };
      //Creating new account
      async CreateAccount(a:string, b: string, c: string) {
        await this.setInput(this.emailAddress, a);
        await this.setInput(this.newUserName, b)
        await this.setInput(this.newPassword, c)
      }
      //find and click on an element
      async findAndClick(elementBy) {
        await this.getElement(elementBy);
        await this.click(elementBy);
      }
      
      //sign in
      async signIn(): Promise<void> {
        await this.driver.wait(until.elementLocated(this.SignInInput));
        await this.driver.findElement(this.SignInInput).click();
        await this.driver.sleep(1000)
        await this.driver.findElement(this.usernameField).sendKeys(signInData.username);
        await this.driver.sleep(1000)
        await (await this.driver.findElement(this.passwordField)).sendKeys(signInData.password);
        await (await this.driver.findElement(this.SignInButton)).click();
        await this.driver.sleep(1000)
        return await this.driver.wait(until.elementLocated(this.userProfile)).click();
        
      };

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
      async findElement(elementBy: By, keys){
        await this.driver.wait(until.elementLocated(elementBy));
        await this.driver.findElement(elementBy).click();
  
      };
      async doSearch(text: string) {
        return this.sendKeys(this.searchBar, `${text}\n`);
      }
      // async getResults() {
      //   return this.getText(this.results);
      // }
      async getText(elementBy: By, ){
        await this.driver.wait(until.elementLocated(this.searchBar));
        return (await this.driver.findElement(elementBy)).getText();
      };
      
      
  
  }