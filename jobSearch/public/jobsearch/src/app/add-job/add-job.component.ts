import { Component, OnInit } from '@angular/core';
import { JobDataService } from '../job-data.service';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';


export class location {
  #_id!: String;
  #title!: string;
  #coordinate!: [number];

  constructor(_title: string, _coordinates: [number]) {
      this.#coordinate = _coordinates,
      this.#title = _title
  }

  get id() {
    return this.#_id;
  }

  set id(id:String){
    this.#_id=id;
  }

  get title() {
    return this.#title;
  }

  get coordinates() {
    return this.#coordinate;
  }
}

export class Job {
  #_id!: string;
  #title!: string;
  #salary!: number;
  #location!: location;
  #description!: string;
  #experience!: string;
  #skill!: [String];
  #postDate!: number

  constructor(title: string, salary: number,
    description: string,
    experience: string, skill: [String]) {
    this.#title = title,
      this.#salary = salary,
      this.#description = description,
      this.#experience = experience,
      this.#skill = skill,
      this.#postDate = Date.now();
  }

  get _id() {
    return this.#_id;
  }

  set id(id: string) {
    this.#_id = id;
  }

  set location(location: location) {
    this.#location = location;
  }
  get title() {
    return this.#title;
  }
  get salary() {
    return this.#salary;
  }
  get location() {
    return this.#location;
  }
  get description() {
    return this.#description;
  }
  get experience() {
    return this.#experience
  }
  get skill() {
    return this.#skill;
  }
  get postDate() {
    return this.#postDate;
  }

}


@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {

  #addForm!: FormGroup;

  get addForm() {
    return this.#addForm;
  }

  job!: Job;


  constructor(private _jobService: JobDataService, private _formBuilder: FormBuilder, private _router: Router) { }

  ngOnInit(): void {
    this.#addForm = this._formBuilder.group({
      title!: "",
      salary!: "",
      experience!: "",
      description!: "",
      skill!: ""
    });

  }


  onAdd(): void {
    console.log(this.#addForm.value);

    this.job = new Job(this.#addForm.value.title, this.#addForm.value.salary,
       this.#addForm.value.description, this.#addForm.value.experience,
      this.#addForm.value.skill);

      console.log(this.job);
    this._jobService.addJob(this.job).subscribe((response) => {
      this.job = response;
      console.log(this.job);
      this._router.navigate(["jobs"]);
    });
  }

}
