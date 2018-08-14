import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { ToggleSelectedService } from '../toggle-selected.service';
import { LoadDataService } from '../load-data.service';

@Component({
  selector: 'app-album-container',
  templateUrl: './album-container.component.html',
  styleUrls: ['./album-container.component.css']
})
export class AlbumContainerComponent implements OnInit {

  albums: Album[];

  selectedAlbum: Album;

  onSelect(album: Album) : void {
    this.toggleSelectedService.select(album);
  }

  getAlbums(): void {
    this.loadDataService.getAlbums()
      .subscribe(albums => this.albums = albums);
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
