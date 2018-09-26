import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Album } from './album';
import { Photo } from './photo';
import { ALBUMS } from './all-albums';
import { PHOTOS } from './all-photos';


@Injectable({
  providedIn: 'root'
})
export class LoadDataService {
  totalAlbumList: Album[];
  photoList: Photo[];

  getAlbums(): Observable<Album[]> {
    return of(ALBUMS);
  }

  getPhotos(): Observable<Photo[]> {
    return of(PHOTOS);
  }

  constructor() { }
}
