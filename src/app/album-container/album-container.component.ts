import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { ALBUMS } from '../all-albums';
import { ToggleSelectedService } from '../toggle-selected.service';

@Component({
  selector: 'app-album-container',
  templateUrl: './album-container.component.html',
  styleUrls: ['./album-container.component.css']
})
export class AlbumContainerComponent implements OnInit {

  albums = ALBUMS;

  selectedAlbum: Album;

  onSelect(album: Album) : void {
    this.toggleSelectedService.select(album);
  }

  constructor(
    private toggleSelectedService: ToggleSelectedService
  ) { }

  ngOnInit() {
    this.toggleSelectedService.selectedAlbumUpdated.subscribe(
      (album) => this.selectedAlbum = this.toggleSelectedService.getSelected()
    )
  }

}
