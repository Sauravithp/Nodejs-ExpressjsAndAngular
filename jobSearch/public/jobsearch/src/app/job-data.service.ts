import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from './add-job/add-job.component';
import { JobUpdate } from './update/update.component';

@Injectable({
  providedIn: 'root'
})
export class JobDataService {

   #baseUrl:string="http://localhost:3000/api/jobSearch";

  constructor(private _http:HttpClient) { }


  public getAllJobs(offset:number,count:number):Observable<Job[]>{
    const url=this.#baseUrl+"?offset="+offset+"&count="+count;
    return this._http.get<Job[]>(url);
  }

  public getJobCount():Observable<number>{
    const url=this.#baseUrl+"/count";
    return this._http.get<number>(url);
  }

  public getJobById(id:string):Observable<Job>{
    const url=this.#baseUrl+"/"+id;
    return this._http.get<Job>(url);
  }

  public getJobByTitle(title:string):Observable<Job>{
    const url=this.#baseUrl+"/search/"+title;
    return this._http.get<Job>(url);
  }
  public deleteJobById(id:string):Observable<string>{
    const url=this.#baseUrl+"/"+id;
    return this._http.delete<string>(url);
  }

  public addJob(job:Job):Observable<Job>{
    console.log(job);
    return this._http.post<Job>(this.#baseUrl,{
      "title":job.title,
      "skill":job.skill,
      "salary":job.salary,
      "experience":job.experience,
      "description":job.description
    });
  }

  public updateJob(job:JobUpdate,id:string):Observable<JobUpdate>{
    const url=this.#baseUrl+"/"+id;

    console.log(job);
    return this._http.put<JobUpdate>(url,{
      "title":job.title,
      "skill":job.skill,
      "salary":job.salary,
      "experience":job.experience,
      "description":job.description
    });
  }
}
