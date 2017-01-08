import { Injectable } from '@angular/core';
import { PlaylistsService } from '../playlists/playlists.service';
import { Subject } from 'rxjs';

@Injectable()
export class PlaylistSelectionService {

  constructor(private playlistsService: PlaylistsService) { 
      this.playlistsService.getPlaylistsStream()
        .subscribe(playlists => {
          if(!this.selectedId) {
            this.select(playlists[0]);
          }
    })
  }

  selectedId;

  selectedIdStream = new Subject();

  getSelectionStream() {
    return this.selectedIdStream.startWith(this.selectedId)
  }

  select(playlistId) {
    this.selectedId = playlistId;
    this.selectedIdStream.next(this.selectedId);
  }

  addToPlaylist(track) {
    this.playlistsService.addToPlaylist(this.selectedId, track)
  }

}
