import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'playlist-form',
  template: `
    <div class="card">
      <div class="card-block">
        <h4 class="card-title">Playlista</h4>
        <p class="card-text">Opis playlisty.</p>
      </div>
      <!--* odpina element od drzewa DOM i zamienia na szablon-->
      <div class="card-block">
        <div class="form-group">
          <label for="">Name:</label>
          <!--Sposób na odniesienie się do właściwości i jej wyświtlenie przez [] nawaias kwadratowy-->
          <!--Na zdarzenie (keyup) wykonuję kod "playlist.name = $event.target.value", który pobiera wartość lub stan elementu i aktualizuje dane-->
          <input type="text" [(ngModel)]="playlist.name" class="form-control">
                                  <!--[xxx]="zmienna" (xxxChange)="zmienna = $event"
                                      [(xxx)] = "zmienna"-->
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
          <!--Jeśli chce pobierać zdarzenie które się dzieje na komponencie to używam () np. (click)="save($event), a jeśli przekazuje dane do komponentu to [] np. [checked]="playlist.favourites",-->
        </div>
      </div><!--card-block-->
    </div><!--edited-->
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
