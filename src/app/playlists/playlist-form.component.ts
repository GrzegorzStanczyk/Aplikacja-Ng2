import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaylistsService } from './playlists.service';

@Component({
  selector: 'playlist-form',
  template: `
      <div *ngIf="playlist">
        <form #formRef="ngForm" novalidate="true">
          <div class="form-group">
            <label for="">Name:</label>
            <input type="text" #nameRef="ngModel" required [(ngModel)]="playlist.name" name="name" class="form-control">
          </div>
          <div class="form-group">
            <label for="">Opis:</label>
            <textarea #descriptionRef="ngModel" [(ngModel)]="playlist.description" name="description" maxlength="200" class="form-control"></textarea>
            
          </div>
          <div class="form-group">
            <label for="">Color:</label>
            <input type="color" [(ngModel)]="playlist.color" name="color">          
          </div>
          <div class="form-group">
            <label for="">
              <input type="checkbox" [(ngModel)]="playlist.favourite" name="favourite"> Ulubiona</label>
          </div>
          <div class="form-group">
            <button class="btn btn-success float-xs-right" 
                    (click)="save(formRef.valid, playlist)">Zapisz</button>
          </div>
        </form>
      </div>
  `,
  styles: []
})
export class PlaylistFormComponent implements OnInit {

  playlist;

  save(valid, playlist) {
    if(!valid) {
      return;
    }
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
