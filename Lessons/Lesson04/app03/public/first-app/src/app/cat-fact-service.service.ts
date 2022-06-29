import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatFactServiceService {

  private baseURl="https://newton.vercel.app/api/v2/factor/x%5E2-1";

  constructor(private __http:HttpClient) { }

  public getResult():Observable<any[]>{
    const url: string =this.baseURl;
    return this.__http.get<any[]>(url);
  }
}
