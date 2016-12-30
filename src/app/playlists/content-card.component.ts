// `ng g c --flat -it -is ContentCard` --flat nie generuje katalogu, -it ilnie template, -is ilnie style
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'content-card',
  template: `
    <div class="card">
      <div class="card-block">
        <h4 class="card-title">Playlista</h4>
        <p class="card-text">Wybierz playlistę</p>
      </div>
    </div>
  `,
  styles: [`
    h4 {
      color: red;
    }
    `]
    // Warianty izolacji
  // encapsulation: ViewEncapsulation.Emulated
})
export class ContentCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
