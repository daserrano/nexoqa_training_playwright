import { Locator, Page } from "@playwright/test";

export class SongMetadataPage {
    readonly page: Page;
    readonly title: Locator;
    readonly artist: Locator;
    readonly gener: Locator;
    readonly album: Locator;
    readonly albumImageUrl: Locator;
    readonly youtubeUrl: Locator;
    readonly tab: Locator;
    readonly lyrics: Locator;
    readonly button: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = this.page.locator('#sngTitle');
        this.artist = this.page.locator('#sngArtist');
        this.gener = this.page.locator('#sngGenre');
        this.album = this.page.locator('#sngAlbum');
        this.albumImageUrl = this.page.locator('#sngAlbumImg');
        this.youtubeUrl = this.page.locator('#sngYoutube');
        this.tab = this.page.locator('#sngTab');
        this.lyrics = this.page.locator('#sngLyrics');
        this.button = this.page.locator('#sngBtn');
    }

    async fillSong (
        title: string, 
        artist: string, 
        gener: string, 
        album: string, 
        albumImageUrl: string, 
        youtubeUrl: string, 
        tab: string, 
        lyrics: string
    ) {
        await this.title.fill(title);
        await this.artist.fill(artist);
        await this.gener.fill(gener);
        await this.album.fill(album);
        await this.albumImageUrl.fill(albumImageUrl);
        await this.youtubeUrl.fill(youtubeUrl);
        await this.tab.fill(tab);
        await this.lyrics.fill(lyrics);

    }
}