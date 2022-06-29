import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArithmaticService {

  private baseUrl="https://newton.vercel.app/api/v2/factor/x%5E2-1";

  constructor(private _httpClient: HttpClient) { }

  public getResult():Observable<any[]>{
    return this._httpClient.get<any[]>(this.baseUrl);
  }
}
