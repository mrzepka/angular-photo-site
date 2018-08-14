import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Album } from './album';
import { Photo } from './photo';
import { ALBUMS } from './all-albums';


@Injectable({
  providedIn: 'root'
})
export class LoadDataService {
  totalAlbumList: Album[];
  photoList: Photo[];

  getAlbums(): Observable<Album[]> {
    return of(ALBUMS);
  }

  constructor() { }
}
