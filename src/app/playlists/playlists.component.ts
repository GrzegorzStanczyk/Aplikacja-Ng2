// ng g c Playlists
import { Component, OnInit } from '@angular/core';

// Dekoraotr
@Component({
  selector: 'playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

  selected = null;

  edited = {

  }

  mode = "none";

  playlists = [
    {
      name: 'The best of Eduweb',
      tracks: 23,
      color: '#0000FF',
      favourite: false
    },
    {
      name: 'Angular Greatest Hits',
      tracks: 2,
      color: '#FF0000',
      favourite: true
    }
  ]

  select(playlist) {
    // zapobiegnięcie znikania okna playlisty podczas klikania albumu na liście. 
    if(playlist !== this.selected)
    this.mode = "selected";
    this.selected = playlist;
  }

  edit(playlist) {
    this.mode = "edit";
    this.edited = playlist;
    this.selected = playlist;
  }
  
  createNew() {
    this.mode = "edit";
    var newPlaylist = {
      name: '',
      tracks: 0,
      color: '#FF0000',
      favourite: false
    };
    this.selected = newPlaylist;
    this.edited = newPlaylist;
  }

  

  save(event) {
    console.log("Zapisano", event)
  }

  constructor() { }

  ngOnInit() {
  }

}
