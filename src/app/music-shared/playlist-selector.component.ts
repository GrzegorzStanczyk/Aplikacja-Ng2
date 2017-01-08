import { Component, OnInit } from '@angular/core';
import { PlaylistSelectionService } from './playlist-selection.service';
import { PlaylistsService } from '../playlists/playlists.service';

@Component({
  selector: 'playlist-selector',
  template: `
    <div class="input-group">
      <label class="col-xs-4 col-form-label">Aktywna Playlista: </label>
      <select class="form-control" [ngModel]="selectedId" (ngModelChange)="setSelected($event)">
        <option *ngFor="let playlist of playlists" [value]="playlist.id">
          {{playlist.name}} ({{playlist.tracks.length}})
        </option>
      </select>
    </div>
  `,
  styles: []
})
export class PlaylistSelectorComponent implements OnInit {

  selectedId;

  playlists = [];

  setSelected(id) {
    this.selectionService.select(id);
  }

  constructor(private selectionService: PlaylistSelectionService,
              private playlistsService: PlaylistsService) { }

  ngOnInit() {
    this.selectionService.getSelectionStream()
      .subscribe(id => {
        this.selectedId = id;
      })
    this.playlistsService.getPlaylistsStream()
    .subscribe(playlists => {
      this.playlists = playlists;
    })
  }

}
