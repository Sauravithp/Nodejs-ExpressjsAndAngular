import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { StudentDataService } from '../student-data.service';



export class Student{
  #_id!:string;
  #_name!:String;
  #_gpa!: number;

  constructor(){}

  get gpa(){
    return this.#_gpa;
  }

  get _id(){
    return this.#_id;
  }

  get _name(){
    return this.#_name
  }

  set gpa(gpa:number){
       this.#_gpa= gpa;
  }

  set name(name:string){
      this.#_name=name;
  }

  set _id(_id:string){
      this.#_id=_id
  }
}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students:Student[]=[];

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
