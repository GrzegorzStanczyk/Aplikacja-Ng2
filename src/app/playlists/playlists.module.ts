// ng g m Playlists
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PlaylistsService } from './playlists.service'
import { PlaylistsComponent } from './playlists.component';
import { ContentCardComponent } from './content-card.component';
import { PlaylistFormComponent } from './playlist-form.component';
import { PlaylistsListComponent } from './playlists-list.component';
import { PlaylistDetailComponent } from './playlist-detail.component';

import playlistsData from './playlists.data';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    PlaylistsComponent,
    ContentCardComponent,
    PlaylistFormComponent,
    PlaylistsListComponent,
    PlaylistDetailComponent
  ],
  exports: [
    PlaylistsComponent
  ],
  providers: [
    // { provide: PlaylistsService, useClass: PlaylistsService }
    PlaylistsService,
    { provide: 'PlaylistsData', useValue: playlistsData }
    // { provide: 'PlaylistsData', useFactory: ()=>{
    //   playlistsData.push({id: 123, name: "Test", color: 'red', favourite: false, tracks: 5})
    //   return playlistsData;
    // }}
  ]
})
export class PlaylistsModule { }
