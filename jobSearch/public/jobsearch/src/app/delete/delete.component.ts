import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobDataService } from '../job-data.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private _jobService:JobDataService,private _route:ActivatedRoute,private _router:Router) { }

  ngOnInit(): void {
    const id=this._route.snapshot.params["id"];
    this._jobService.deleteJobById(id).subscribe((response)=>{
       console.log("deleted");
       console.log(response);
       this._router.navigate(["jobs"]);
    });
  }

}
