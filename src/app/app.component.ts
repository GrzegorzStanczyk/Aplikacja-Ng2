import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'witaj w kursie Angular!';

  get getAge() {
    return (new Date()).getFullYear() - this.person.birthdate;
  }

  person = {
    name: 'Testory',
    birthdate: 1987,
    company: {
      name: 'Eduweb'
    },
    bio: 'Coś do wyświetlenia <script>widnow.alert("tekst")</script>'
  }
}
