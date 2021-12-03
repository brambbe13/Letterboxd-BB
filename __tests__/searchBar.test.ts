const chromedriver = require("chromedriver")
import { filmPage } from "./pageObjects/filmPageObjects" 


describe("Can it search various types of film titles", () => {
    let filmTest = new filmPage();
    beforeEach(async () =>{
        await filmTest.navigate()
     });
    afterAll(async () => {
        await filmTest.driver.quit();
    });
    test('Can it search valid American film titles', async () => { 
        /**This is a for loop for it to search three valid American film titles with a 
         * screenshot for verification
        */
        let filmInquiries: Array <string> = [
            "Shang-Chi", 
            "Spencer", 
            "House of Gucci"]

       for (let i =0; i< filmInquiries.length; i++){
           await filmTest.doSearch(filmTest.searchBar , `${filmInquiries[i]}`)
           await filmTest.driver.sleep(3000);
           await filmTest.takeScreenshot(`__tests__/Screenshots/searchBar/AmericanFilm/validFilmResults-${Date.now()}`);
       }
    });
    test('Can it Search Dubbed American Film Titles', async () => {
        /**This test searches dubbed American film titles and takes a screenshot as well
         * Testing Letterboxd's film repertoire
         */
        let dubbedFilm: Array <string> = [
            "La Guerra de las Galaxias",
            "La sombra del amor",
            "Mi pobre angelito" ,
            "La jungla de cristal"]

        for (let i = 0; i< dubbedFilm.length; i++){
            await filmTest.doSearch(filmTest.searchBar, `${dubbedFilm[i]}`)
            await filmTest.driver.sleep(3000);
            await filmTest.takeScreenshot(`__tests__/Screenshots/searchBar/DubbedFilm/dubbedFilmResults-${Date.now()}`);
        }
    });
    test('Can it Search Foreign Film Titles', async () => {
        /**Testing foreign film titles in the search bar and screenshot taken for verification */
        let foreignFilm: Array <string> = [
            "Nosotros los pobres",
            "La Leyenda de la Nahuala",
            "El laberinto del fauno", 
            "Atletico San Pancho"]

        for (let i = 0; i< foreignFilm.length; i++){
            await filmTest.doSearch(filmTest.searchBar, `${foreignFilm[i]}`)
            await filmTest.driver.sleep(3000);
            await filmTest.takeScreenshot(`__tests__/Screenshots/searchBar/ForeignFilm/foreignFilmResults-${Date.now()}`);
        }
    });
})