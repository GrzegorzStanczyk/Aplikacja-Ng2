import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaylistsService } from './playlists.service';

@Component({
  selector: 'playlist-form',
  template: `
      <div *ngIf="playlist">
        <div class="form-group">
          <label for="">Name:</label>
          <input type="text" [(ngModel)]="playlist.name" class="form-control">
        </div>
        <div class="form-group">
          <label for="">Tracks:</label>
          <input type="text" [value]="playlist.tracks + ' utworów'" disabled class="form-control">
        </div>
        <div class="form-group">
          <label for="">Color:</label>
          <input type="color" [(ngModel)]="playlist.color">          
        </div>
        <div class="form-group">
          <label for="">
            <input type="checkbox" [(ngModel)]="playlist.favourite"> Ulubiona</label>
        </div>
        <div class="form-group">
          <button class="btn btn-success float-xs-right" 
                  (click)="save(playlist)">Zapisz</button>
        </div>
      </div>
  `,
  styles: []
})
export class PlaylistFormComponent implements OnInit {

  playlist;

  save(playlist) {
    this.playlistsService.savePlaylist(playlist);
    this.router.navigate(['playlist', playlist.id]);
  }

  constructor(private activeRoute: ActivatedRoute,
              private playlistsService: PlaylistsService,
              private router: Router) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      let id = parseInt(params['id']);
      if(id) {
        let playlist =this.playlistsService.getPlaylist(id)
        this.playlist = Object.assign({}, playlist)
      } else {
        this.playlist = this.playlistsService.createPlaylist();
      }
    })
  }

}
