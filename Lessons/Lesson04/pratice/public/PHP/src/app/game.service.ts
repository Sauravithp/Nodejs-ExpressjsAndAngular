import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private _http: HttpClient) { }


  private baseUrl="https://cat-fact.herokuapp.com";
  private gameBaseUrl="https://localhost:3000/api/games";

  public getResult(): Observable<any[]>{
    const url=this.baseUrl+"/facts";
    return this._http.get<any[]>(url);
  }

  public getGamesResult(): Observable<any[]>{
    const url=this.gameBaseUrl;
    return this._http.get<any[]>(url);
  }


}
