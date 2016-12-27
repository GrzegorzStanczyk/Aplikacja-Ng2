import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'witaj w kursie Angular!';

  playlist = {
    name: 'The best of Eduweb',
    tracks: 23,
    color: '#FF0000',
    favourite: true
  }

  selected = null;  

  save(event) {
    console.log('Zapisano', event);
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
