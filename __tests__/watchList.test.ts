import { Builder, Capabilities, until } from "selenium-webdriver";
const chromedriver = require("chromedriver")
import { filmPage } from "./pageObjects/filmPageObjects"; 



describe("Add film to watchlist", () => {
    let filmTest = new filmPage();
    beforeEach(async () =>{
        await filmTest.navigate();
        await filmTest.signIn()
    
        });
        afterAll(async () => {
            await filmTest.driver.quit();
        });

     test('Can it add films to watchlist', async () => { 

        await filmTest.findAndClick(filmTest.spencer);
         
        // await filmTest.driver.wait(until.elementLocated(filmTest.emailAddress));
        // await filmTest.driver.findElement(filmTest.emailAddress).sendKeys('brendabrambila95@gmail.com\n')
        //await filmTest.driver.wait(until.elementLocated(filmTest.newUserName));
        //await filmTest.driver.findElement(filmTest.newUserName).sendKeys('user395\n')
        //await filmTest.driver.sleep(1000)
        // await filmTest.driver.wait(until.elementLocated(filmTest.newPassword));
        // await filmTest.driver.findElement(filmTest.newPassword).sendKeys('P@$sw0rd123\n')
        // await filmTest.driver.sleep(1000)
        // await filmTest.driver.wait(until.elementLocated(filmTest.firstCheckbox));
        // await filmTest.driver.findElement(filmTest.firstCheckbox).click();
        // await filmTest.driver.sleep(1000)
        // await filmTest.driver.wait(until.elementLocated(filmTest.secondCheckbox));
        // await filmTest.driver.findElement(filmTest.secondCheckbox).click();
        // await filmTest.driver.sleep(1000)
        // await filmTest.driver.wait(until.elementLocated(filmTest.thirdCheckbox));
        // await filmTest.driver.findElement(filmTest.thirdCheckbox).click();
        // await filmTest.driver.sleep(1000)
        // await filmTest.driver.wait(until.elementLocated(filmTest.SignUp));
        // await filmTest.driver.findElement(filmTest.SignUp).click();
        // await filmTest.driver.sleep(1000)
        //await filmTest.takeScreenshot(`__tests__/Screenshots/createAccountResults-${Date.now()}`);

        
     });
    
    
    
 });