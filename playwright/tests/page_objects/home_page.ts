import { Page, Locator } from '@playwright/test';

export class HomePage{
    readonly page: Page;
    readonly addButton: Locator;
    readonly songs: Locator;
    // readonly editButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.page.waitForSelector('div.song-title')
        this.addButton = this.page.locator('a[href="#/songs/create"]');
        this.songs = this.page.locator('div.song');
        // this.editButton = this.page.locator('div.song.')
    }
}