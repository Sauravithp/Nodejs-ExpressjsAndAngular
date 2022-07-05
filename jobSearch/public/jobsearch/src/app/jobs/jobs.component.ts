import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { Job } from '../add-job/add-job.component';
import { JobDataService } from '../job-data.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobs: Job[] = [];
  offset: number = 0;
  count: number = 5;
  viewedCount = 0;
  totalCount = 0;
  isPreviouseDisabled = true;
  isNextDisabled = false;

  #searchForm!:FormGroup;

  get searchForm(){
    return this.#searchForm;
  }

  constructor(private _jobService: JobDataService,private _formBuilder:FormBuilder,private _router:Router ) { }

  ngOnInit(): void {

    this._jobService.getAllJobs(this.offset, this.count).subscribe((response) => {
      this.jobs = response;
      console.log(this.jobs);
      this.viewedCount = this.jobs.length;
    });

    this._jobService.getJobCount().subscribe((response) => {
      this.totalCount = response;
    });

    this.#searchForm=this._formBuilder.group({
      search:""
    });
  }

  onNext(): void {
    if (this.viewedCount != this.totalCount) {
      this.offset = this.offset + 1;
      this._jobService.getAllJobs(this.offset, this.count).subscribe((jobs) => {
        this.jobs = jobs;
        console.log(this.jobs);
        this.viewedCount = this.viewedCount + this.count;
        if (this.viewedCount >= this.totalCount) {
          this.isNextDisabled = true;
          this.viewedCount = this.totalCount;
        }
        if (this.offset != 0) {
          this.isPreviouseDisabled = false;
        }
      });
    }
  }

  onPrevious(): void {
    this.offset = this.offset - 1;
    this._jobService.getAllJobs(this.offset, this.count).subscribe((jobs) => {
      this.jobs = jobs;
      console.log(this.jobs);
      this.viewedCount = this.viewedCount - this.count;
    });

    if (this.offset == 0) {
      this.isPreviouseDisabled = true;
    }

  }

  onSearch():void{

    console.log(this.#searchForm.value);
    this._router.navigate(["/search/"+this.#searchForm.value.search]);
    
  }

  onOptionsSelected(e: any): void {

    let s = e.target.value;
    this._router.navigate(["/search/"+s]);
    console.log(s);
  }
}
