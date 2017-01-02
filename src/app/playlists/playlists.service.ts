// ng g s Playlists
import { Injectable } from '@angular/core';

@Injectable()
export class PlaylistsService {

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

  getPlaylists() {
    return this.playlists;
  }

  constructor() { }

}
