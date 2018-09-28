import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public server = 'http://localhost:3000/';
    public albumUrl = 'getAlbums/'
    public photoUrl = 'getPhotos/'
    public serverWithAlbumUrl = this.server + this.albumUrl;
    public serverWithPhotoUrl = this.server + this.photoUrl;
}