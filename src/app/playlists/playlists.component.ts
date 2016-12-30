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
      id: 1,
      name: 'The best of Eduweb',
      tracks: 23,
      color: '#0000FF',
      favourite: false
    },
    {
      id: 2,
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
    this.edited = Object.assign({}, playlist);
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
    this.edited = Object.assign({}, newPlaylist);;
  }

  

  save(playlist) {
    if(playlist.id) {
      let index = this.playlists.findIndex((old_playlist)=>(
        old_playlist.id === playlist.id
      ))
      this.playlists.splice(index, 1, playlist)
    }else{
      playlist.id = Date.now();
      this.playlists.push(playlist);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
