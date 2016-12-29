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

  playlist = {
    name: 'The best of Eduweb',
    tracks: 23,
    color: '#FF0000',
    favourite: true
  }

  select(playlist) {
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

// Funkcja wykonywana w momencie tworzenia klasy
  constructor() {
    
  }
}
