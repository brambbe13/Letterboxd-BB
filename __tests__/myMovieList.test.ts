import { Builder, Capabilities, until } from "selenium-webdriver";
const chromedriver = require("chromedriver")
import { filmPage } from "./pageObjects/filmPageObjects"; 


describe("Can add items to Film section", () => {
    let filmTest = new filmPage();
    beforeEach(async () =>{
        await filmTest.navigate()
        await filmTest.signIn();
        });
        afterAll(async () => {
            await filmTest.driver.quit();
        });

     test('Can add items to Films I have watched lists', async () => { 
         /** This test focuses on 
          */
         let houseOfGucci = await filmTest.driver.findElement(filmTest.houseOfGucci)
        
        await filmTest.driver.wait(until.elementLocated(filmTest.houseOfGucci))
        await houseOfGucci.click();
        await filmTest.driver.sleep(1000)
        //await filmTest.driver.wait(until.elementLocated(filmTest.searchBar))
        //await filmTest.driver.findElement(filmTest.searchBar).sendKeys('Shang-Chi\n')
        //await filmTest.driver.sleep(1000)
        
        //await filmTest.takeScreenshot(`__tests__/Screenshots/addFilmResults-${Date.now()}`);

     });
    
    
    
 });