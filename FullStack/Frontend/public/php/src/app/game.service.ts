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
}
