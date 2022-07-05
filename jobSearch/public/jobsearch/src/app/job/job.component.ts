import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job, location } from '../add-job/add-job.component';
import { JobDataService } from '../job-data.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {


  job!: Job;

  constructor(private _jobService: JobDataService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this._route.snapshot.partams["id"];
    this._jobService.getJobById(id).subscribe((response) => {
      this.job = response;
      this.job.location=new location("test",[1]);
      console.log("getById--->",this.job);
    });
  }

}
