import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from '../add-job/add-job.component';
import { JobDataService } from '../job-data.service';


export class JobUpdate {
  #_id!: string;
  #title!: string;
  #salary!: number;
  #description!: string;
  #experience!: string;
  #skill!: [String];
  #postDate!: number

  constructor(id:string,title: string, salary: number,
    description: string,
    experience: string, skill: [String]) {
      this.#_id=id
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


  get title() {
    return this.#title;
  }
  get salary() {
    return this.#salary;
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
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  job!: JobUpdate;

  #updateForm!: FormGroup;

  get updateForm() {
    return this.#updateForm;
  }

  constructor(private _formBuilder:FormBuilder,private _jobService:JobDataService,private _router:Router,
    private _route:ActivatedRoute) { 
      this.#updateForm = this._formBuilder.group({
        title!: "",
        salary!: "",
        experience!: "",
        description!: "",
        skill!: ""
      });
    }

  ngOnInit(): void {
    const id:string=this._route.snapshot.params["id"];

    console.log(id);

    this._jobService.getJobById(id).subscribe((response) => {
      this.job = new JobUpdate(response._id,response.title,response.salary,response.description,response.experience,response.skill);
      console.log("ng onOnit");
      console.log(this.job);

      this.#updateForm = this._formBuilder.group({
        title: this.job.title,
        salary: this.job.salary,
        experience: this.job.experience,
        description: this.job.description,
        skill: this.job.skill,
      });

    });
  }

  onUpdate(): void {
    console.log(this.#updateForm.value);

    this.job = new JobUpdate(this.job._id,this.#updateForm.value.title, this.#updateForm.value.salary,
       this.#updateForm.value.description, this.#updateForm.value.experience,
      this.#updateForm.value.skill);
      console.log(this.job);

    this._jobService.updateJob(this.job,this.job._id).subscribe((response) => {
      this.job = response;
      console.log(this.job);
      this._router.navigate(["jobs"]);
    });
  }

}
