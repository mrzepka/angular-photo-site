import { Component, OnInit } from '@angular/core';

import { AlbumContainerComponent } from '../album-container/album-container.component';
import { ToggleSelectedService } from '../toggle-selected.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  albumcontainer: AlbumContainerComponent;

  onSelect() {
    this.toggleSelectedService.select(undefined);
  }
  constructor(
    private toggleSelectedService: ToggleSelectedService
  ) { }

  ngOnInit() {
  }

}
