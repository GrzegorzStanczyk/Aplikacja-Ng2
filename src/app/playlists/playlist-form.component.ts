import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'playlist-form',
  template: `
      <div>
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
          <button class="btn btn-success float-xs-right" (click)="save($event)">Zapisz</button>
        </div>
      </div>
  `,
  styles: []
})
export class PlaylistFormComponent implements OnInit {

  @Input()
  playlist;

  constructor() { }

  ngOnInit() {
  }

}
