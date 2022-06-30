import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { StudentDataService } from '../student-data.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students:any[]=[];

  constructor(private _service: StudentDataService, private _route:ActivatedRoute) { }

  ngOnInit(): void {

    this._service.getStudents().subscribe(response=>{
      console.log("inside get")
      const students=response;
      this.students=students;
      console.log("data: ",this.students);
    });

  }

}
