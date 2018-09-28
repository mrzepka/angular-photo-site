import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AlbumComponent } from './album/album.component';
import { AlbumContainerComponent } from './album-container/album-container.component';
import { PhotoComponent } from './photo/photo.component';

import { Configuration } from './constants'
import { LoadDataService } from './load-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AlbumComponent,
    AlbumContainerComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [LoadDataService, Configuration],
  bootstrap: [AppComponent]
})
export class AppModule { }
