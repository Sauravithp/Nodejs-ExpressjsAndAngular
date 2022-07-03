import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job, location } from '../add-job/add-job.component';
import { JobDataService } from '../job-data.service';

@Component({
  selector: 'app-search-job',
  templateUrl: './search-job.component.html',
  styleUrls: ['./search-job.component.css']
})
export class SearchJobComponent implements OnInit {

  job!: Job;

  constructor(private _jobService: JobDataService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("Search Component");
    const title = this._route.snapshot.params["title"];
    console.log(title);
    this._jobService.getJobByTitle(title).subscribe((response) => {
      this.job = response;
      console.log("getByTitle-->",response);
    });
  }

}
