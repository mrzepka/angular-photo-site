import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Album } from './album'

@Injectable({
  providedIn: 'root'
})
export class ToggleSelectedService {

  selectedAlbum: Album = undefined;

  selectedAlbumUpdated: EventEmitter<Album> = new EventEmitter();

  select(album: Album) {
    this.selectedAlbum = album;
    this.selectedAlbumUpdated.emit(this.selectedAlbum);
  }

  getSelected(): Album {
    return this.selectedAlbum;
  }

  constructor() { }
}
