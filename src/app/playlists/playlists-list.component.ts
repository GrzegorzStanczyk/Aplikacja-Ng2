import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'playlists-list',
  template: `
    <table class="table table-striped">
      <thead>
        <tr>
          <th> # </th>
          <th> Nazwa </th>
          <th> Utworów </th>
          <th> Ulubiona </th>
        </tr>
      </thead>
      <tbody>
        <!--let zmienna lokalna (stała), nie zmienia watości po iteracji pętli-->
        <tr *ngFor="let playlist of playlists, let i = index"
        class="playlist-row" 
        [ngClass]="{'table-active': selected == playlist, 'playlist-row': true}" 
        [ngStyle]="getPlaylistStyle(playlist)"
        (click)="select(playlist)">
          <td> {{i+1}}. </td>
          <td> {{playlist.name}} </td>
          <td> {{playlist.tracks}} </td>
          <td>
            <label for="">
            <input type="checkbox" 
            [(ngModel)]="playlist.favourite"
            (click)="$event.stopPropagation()"> Ulubiona</label>
          </td>
        </tr>
      </tbody>
    </table>
  `,
  styles: []
})
export class PlaylistsListComponent implements OnInit {

  @Output('selected')
  onSelected = new EventEmitter()

  // Dzięki temu mogę przekazywać playlists do środka by móc go renderować
  @Input()
  playlists;  

  constructor() { }

  ngOnInit() {
  }

  getPlaylistStyle(playlist) {
    return {
      borderBottomColor: playlist.color
    }
  }

  select(playlist) {
    this.onSelected.emit(playlist);
  }
}
