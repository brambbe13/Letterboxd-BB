const chromedriver = require("chromedriver")
import { filmPage } from "./pageObjects/filmPageObjects" 




describe("Can it sign in with valid credentials", () => {
    let filmTest = new filmPage();
    
    beforeEach(async () =>{
        await filmTest.navigate()
     });
    afterAll(async () => {
        await filmTest.driver.quit();
    });
    test('Can it sign in', async () => { 

         /** This test focuses on ability to sign in with valid credentials.
          * It will take a screenshot to verify if it was successful
        */
        await filmTest.SignIn("bbrambila23","DevMountain12@");
        await filmTest.driver.sleep(4000)
        await filmTest.takeScreenshot(`__tests__/Screenshots/SignIn/signInResults-${Date.now()}`);
        await filmTest.enableMenu(filmTest.hoverMenu);
        await filmTest.findAndClick(filmTest.SignOut);
    });
    test('Can it sign in invalid username', async () => { 

        /** This test focuses on ability to sign in with invalid username
         * screenshot is taken for verification
       */
       await filmTest.SignIn("bbrambila2", "DevMountain12@");
       await filmTest.driver.sleep(4000)
       await filmTest.takeScreenshot(`__tests__/Screenshots/SignIn/InvalidsignInUsernameResults-${Date.now()}`);
       
   });
   test('Can it sign in invalid password', async () => { 

       /** This test focuses on ability to sign in with invalid password
        * Screenshot taken for verification
      */
      await filmTest.SignIn("bbrambila23", "12345");
      await filmTest.driver.sleep(4000)
      await filmTest.takeScreenshot(`__tests__/Screenshots/SignIn/InvalidsignInPasswordResults-${Date.now()}`);
      
  });
      
});