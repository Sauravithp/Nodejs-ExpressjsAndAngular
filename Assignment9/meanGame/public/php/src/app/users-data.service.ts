import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  #baseUrl="http://localhost:3000/api/users";


  constructor(private _http:HttpClient) { }

  public register(user:any):Observable<any>{
    return this._http.post<any>(this.#baseUrl,user);
  }
}
