import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'witaj w kursie Angular!';

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
    var newPlaylist = {};
    this.selected = newPlaylist;
    this.edited = newPlaylist;
  }

  getPlaylistStyle(playlist) {
    return {
      borderBottomColor: playlist.color
    }
  }

  save(event) {
    console.log("Zapisano", event)
  }
// Funkcja wykonywana w momencie tworzenia klasy
  constructor() {
    
  }
}
