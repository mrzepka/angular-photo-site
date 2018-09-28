import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from
'@angular/common/http';

import { Album } from './album';
import { Photo } from './photo';
import { Configuration } from './constants';


@Injectable()
export class LoadDataService {

  private albumUrl: string;
  private photoUrl: string;

  constructor(private http: HttpClient, private configuration: Configuration) {
    this.albumUrl = configuration.serverWithAlbumUrl;
    this.photoUrl = configuration.serverWithPhotoUrl;
  }

  public getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.albumUrl);
  }

  public getPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.photoUrl + id);
  }


}
