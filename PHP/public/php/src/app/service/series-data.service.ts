import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesDataService {

  constructor(private _http:HttpClient) { }

  #baseUrl="http://localhost:3000/api/series"

  public getAllSeries(offset:number,count:number):Observable<any[]>{
    const url=this.#baseUrl+"?offset="+offset+"&count="+count;
    return this._http.get<any[]>(url);
  }
}
