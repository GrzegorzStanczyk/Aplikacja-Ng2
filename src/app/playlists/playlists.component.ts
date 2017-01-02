// ng g c Playlists
import { Component, OnInit, Inject } from '@angular/core';
import { PlaylistsService } from './playlists.service'

// Dekoraotr
@Component({
  selector: 'playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

  constructor(private playlistsService:PlaylistsService) { 
  }

  playlists = []

  ngOnInit() {
    this.playlists = this.playlistsService.getPlaylists()
  }

  selected = null;

  edited = {

  }

  mode = "none";

  select(playlist) {
    // zapobiegnięcie znikania okna playlisty podczas klikania albumu na liście. 
    if(playlist !== this.selected)
    this.mode = "selected";
    this.selected = playlist;
  }

  edit(playlist) {
    this.mode = "edit";
    this.edited = Object.assign({}, playlist);
    this.selected = playlist;
  }
  
  createNew() {
    this.mode = "edit";
    let newPlaylist = this.playlistsService.createPlaylist();
    this.selected = newPlaylist;
    this.edited = newPlaylist;
  }  

  save(playlist) {
    this.playlistsService.savePlaylist(playlist);
  }
}
