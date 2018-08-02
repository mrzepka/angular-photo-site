import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AlbumComponent } from './album/album.component';
import { AlbumContainerComponent } from './album-container/album-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AlbumComponent,
    AlbumContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
