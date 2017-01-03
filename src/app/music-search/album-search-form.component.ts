import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'album-search-form',
  template: `
    <form (ngSubmit)="search()">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Słowa kluczowe">
        <span class="input-group-btn">
          <button type="submit" class="btn btn-outline-primary">Szukaj</button>
        </span>
      </div>
    </form>
  `,
  styles: []
})
export class AlbumSearchFormComponent implements OnInit {

  constructor() { }

  search() {
    
  }

  ngOnInit() {
  }

}
