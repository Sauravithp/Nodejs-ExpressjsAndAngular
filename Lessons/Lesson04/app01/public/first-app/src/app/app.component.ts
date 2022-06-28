import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'first-app';
  myName = "Sauravi";
  people = [{ name: "Jack", gpa: 3.0, course: "MWA" },
  { name: "Jill", gpa: 3.5, course: "MPP" }]

  salary: number=123.4567;

  today= new Date();

  student={ name: "Jack", gpa: 3.0};

  onButtonClick(): void {
    this.title = "New title";
  }

}
