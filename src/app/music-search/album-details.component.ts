import { Component, OnInit } from '@angular/core';
import { MusicSearchService } from './music-search.service';

@Component({
  selector: 'album-details',
  template: `
    <div class="row mt-1" *ngIf="album">
      <div class="col-xs">
        <album-card class="card" [album]="album"></album-card>
      </div>
      <div class="col-xs">
        <h4 class="display-3 mb-2 float-xs-right">Utwory</h4>
        <track-list [tracks]="album.tracks.items" ></track-list>
      </div>
    </div>
  `,
  styles: []
})
export class AlbumDetailsComponent implements OnInit {

  constructor(private musicService: MusicSearchService) { }

  album;

  ngOnInit() {
    this.musicService.getAlbum('5be3r4YaUXjyOC7kvYT33G')
    .subscribe(album => {
      this.album = album;
    })
  }

}
