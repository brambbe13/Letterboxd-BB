import { Builder, Capabilities, until } from "selenium-webdriver";
const chromedriver = require("chromedriver")
import { filmPage } from "./filmPageObjects"; 


const driver= new Builder().withCapabilities(Capabilities.chrome()).build();

const filmTest = new filmPage (driver,"https://letterboxd.com/");

describe("Can add items to Film section", () => {
    beforeEach(async () =>{
        await filmTest.navigate()
        await filmTest.signIn();
        });
        afterAll(async () => {
            await driver.quit();
        });

     test('Can add items to Films I have watched lists', async () => { 
         /** This test focuses on 
          */
         let searchIcon = filmTest.driver.findElement(filmTest.searchIcon)
         let searchBar = await filmTest.driver.findElement(filmTest.searchBar)

        await filmTest.navigate();
        await filmTest.driver.wait(until.elementLocated(filmTest.searchIcon))
        await searchIcon.click();
        await filmTest.driver.sleep(1000)
        await searchBar.sendKeys('Shang-Chi\n')
        await filmTest.driver.sleep(1000)
        //expect(await filmTest.getResults()).toContain("Shang-Chi");
        //await filmTest.navigate();
        //await filmTest.myProfile();
        //await filmTest.driver.wait(until.elementLocated(filmTest.profileFilms))
        //await (await filmTest.driver.findElement(filmTest.profileFilms)).click();
        // await dressTest.driver.wait(until.elementLocated(dressTest.listView))
        // await (await dressTest.driver.findElement(dressTest.listView)).click();
        // await dressTest.driver.sleep(1000)
        // await dressTest.driver.wait(until.elementLocated(dressTest.addToWishlist))
        // await (await dressTest.driver.findElement(dressTest.addToWishlist)).click();
        // await dressTest.driver.sleep(1000)
        // await dressTest.driver.wait(until.elementLocated(dressTest.closeConfirmMessg))
        // await (await dressTest.driver.findElement(dressTest.closeConfirmMessg)).click();
        // await dressTest.driver.sleep(1000)
        // await dressTest.driver.wait(until.elementLocated(dressTest.customerAccount))
        // await (await dressTest.driver.findElement(dressTest.customerAccount)).click();
        // await dressTest.driver.sleep(1000)
        // await dressTest.driver.wait(until.elementLocated(dressTest.myWishlist))
        // await (await dressTest.driver.findElement(dressTest.myWishlist)).click();
        // await dressTest.driver.sleep(1000)
        // await dressTest.driver.wait(until.elementLocated(dressTest.wishlistView))
        // await (await dressTest.driver.findElement(dressTest.wishlistView)).click();
        // await dressTest.driver.sleep(3000)
        // await dressTest.takeScreenshot(`src/__tests__/Brenda/Brenda.Screenshots/wishListResults-${Date.now()}`);
     });
    
    
    
 });