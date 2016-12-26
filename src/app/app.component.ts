import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'witaj w kursie Angular!';

  counter = 0;
  counter2 = 0;
  
// Funkcja wykonywana w momencie tworzenia klasy
  constructor() {
    setInterval(()=>{
      this.counter++;
    }, 500);

    setInterval(()=>{
      this.counter2++;
    }, 2000)
  }
}
