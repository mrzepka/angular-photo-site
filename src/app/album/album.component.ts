import { Component, OnInit } from '@angular/core';
import { Album } from '../album'

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  album: Album = {
    id: 1,
    name: 'test album',
    active: false
  };

  constructor() { }

  ngOnInit() {
  }

}
