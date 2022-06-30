import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentDataService } from '../student-data.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private _router:Router,private _service:StudentDataService) { }

  ngOnInit(): void {

  }

  onHome(): void{
      this._router.navigate([""]);
  }

  onStudents():void{
      this._router.navigate(["students"]);
  }
}
