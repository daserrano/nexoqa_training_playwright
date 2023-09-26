import test, { expect } from "@playwright/test";
import { HomePage } from "../page_objects/home_page";
import { SongMetadataPage } from "../page_objects/song_metadata_page";

test('Add new song', async({ page }) => {
    await page.goto('http://localhost:8080');
    let homePage: HomePage = new HomePage(page);
    await homePage.addButton.click();
    let songMetadataPage: SongMetadataPage = new SongMetadataPage(page);
    songMetadataPage.fillSong(
      'Time',
      'Hans Zimmer',
      'BSO', 
      'Inception', 
      'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/9f/7e/60/9f7e6017-3bd3-570f-7890-eba0f3aa6c33/mzi.hxbvposl.jpg/1200x1200bf-60.jpg', 
      'https://www.youtube.com/watch?v=RxabLA7UQ9k', 
      'TAB', 
      'BSO of Inception'
    );

    await songMetadataPage.button.click();
    await page.waitForSelector('div.song-title');
    let total = await homePage.songs.count();
    await expect(await homePage.songs.nth(total-1)).toHaveText('Time');
});