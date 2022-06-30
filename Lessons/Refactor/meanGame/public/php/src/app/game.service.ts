import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from './games/games.component';

@Injectable({
  providedIn: 'root'
})
export class GameService {

   #baseUrl="http://localhost:3000/api/games";


  constructor(private _http:HttpClient) { }

  public getGames():Observable<Game[]>{
    return this._http.get<Game[]>(this.#baseUrl);
  }

  public getGame(gameId:string):Observable<Game>{
    const url=this.#baseUrl+"/"+gameId;
    return this._http.get<Game>(url);
  }

  public deleteGame(gameId:string):Observable<Game>{
    const url=this.#baseUrl+"/"+gameId;
    console.log(url);
    return this._http.delete<Game>(url);
  }
}
