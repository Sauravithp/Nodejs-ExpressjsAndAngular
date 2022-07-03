import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { count, Observable } from 'rxjs';
import { Game } from './games/games.component';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {

  #baseUrl: string = "http://localhost:3000/api/games";

  constructor(private http: HttpClient) { }

  public getGames(offset:number,count:number): Observable<Game[]> {
    const url=this.#baseUrl+"?offset="+offset+"&count="+count;
    return this.http.get<Game[]>(url);
  }

  public getGameById(gameId:String):Observable<Game>{
    const url=this.#baseUrl+"/"+gameId;
    return this.http.get<Game>(url);
  }

  public deletGameById(gameId:string):Observable<string>{
    const url=this.#baseUrl+"/"+gameId;
    return this.http.delete<string>(url);
  }


}
