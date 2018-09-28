import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { Photo } from '../photo';

import { ToggleSelectedService } from '../toggle-selected.service';
import { LoadDataService } from '../load-data.service';


@Component({
  selector: 'app-album-container',
  templateUrl: './album-container.component.html',
  styleUrls: ['./album-container.component.css']
})
export class AlbumContainerComponent implements OnInit {

  albums: Album[];
  photos: Photo[];

  selectedAlbum: Album;

  onSelect(album: Album) : void {
    this.toggleSelectedService.select(album);
    this.getPhotos();

  }

  getAlbums(): void {
    this.loadDataService.getAlbums()
      .subscribe(albums => this.albums = albums);
  }

  getPhotos(): void {
    console.log(this.selectedAlbum);
    this.loadDataService.getPhotos(this.selectedAlbum.id)
      .subscribe(photos => this.photos = photos);
  }

  constructor(
    private toggleSelectedService: ToggleSelectedService,
    private loadDataService: LoadDataService
  ) { }

  ngOnInit() {
    this.toggleSelectedService.selectedAlbumUpdated.subscribe(
      (album) => this.selectedAlbum = this.toggleSelectedService.getSelected()
    );
    this.getAlbums();
  }

}
