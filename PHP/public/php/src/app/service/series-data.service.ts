import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Series } from '../series/series.component';

@Injectable({
  providedIn: 'root'
})
export class SeriesDataService {

  constructor(private _http:HttpClient) { }

  #baseUrl="http://localhost:3000/api/series"

  public getAllSeries(offset:number,count:number):Observable<Series[]>{
    const url=this.#baseUrl+"?offset="+offset+"&count="+count;
    return this._http.get<Series[]>(url);
  }

  public getSeriesById(id:string):Observable<Series>{
    const url=this.#baseUrl+"/"+id;
    return this._http.get<Series>(url);
  }

  public getSeriesByName(name:string):Observable<Series>{
    console.log("name--->",name)
    const url=this.#baseUrl+"/search/"+name;
    return this._http.get<Series>(url);
  }
}
