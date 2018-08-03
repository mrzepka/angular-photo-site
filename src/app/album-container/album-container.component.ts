import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { ALBUMS } from '../all-albums';

@Component({
  selector: 'app-album-container',
  templateUrl: './album-container.component.html',
  styleUrls: ['./album-container.component.css']
})
export class AlbumContainerComponent implements OnInit {

  albums = ALBUMS;

  selectedAlbum: Album;

  onSelect(album: Album) : void {
    this.selectedAlbum = album;
    console.log('selected album is');
    console.log(this.selectedAlbum.name);
  }

  constructor() { }

  ngOnInit() {
  }

}
