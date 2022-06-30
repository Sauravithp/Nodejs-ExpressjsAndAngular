import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

   _baseUrl:string="http://localhost:3000/api/games";

  constructor(private _http:HttpClient) { }

  public getStudents(): Observable<any[]>{
    return this._http.get<any[]>(this._baseUrl);
  }

  public getStudent(gameId:string): Observable<any>{
    let url=this._baseUrl+"/"+gameId;
    return this._http.get<any>(url);
  }

  public deleteStudent(gameId:string):Observable<any>{
    let url=this._baseUrl+"/"+gameId;
    return this._http.get<any>(url);
  }
}
