import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddReview } from '../add-review/add-review.component';
import { ReviewResponse } from '../reviews/reviews.component';
import { Review } from '../series/series.component';

@Injectable({
  providedIn: 'root'
})
export class ReviewDataService {

  constructor(private _http:HttpClient) { }

  #baseUrl="http://localhost:3000/api/series"

  public getReviewsBySeriesId(id:string):Observable<ReviewResponse>{
    const url=this.#baseUrl+"/"+id+"/reviews";
    return this._http.get<ReviewResponse>(url);
  }

  public saveReviewBySeriesId(id:string,review:AddReview):Observable<Review>{
    const url=this.#baseUrl+"/"+id+"/reviews";
    return this._http.post<Review>(url,review);
  }
}
