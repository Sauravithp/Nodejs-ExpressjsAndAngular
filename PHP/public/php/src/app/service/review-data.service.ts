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
    console.log("save review serivce",review.description,review.rating);
    console.log("inside post review review",review);
    const url=this.#baseUrl+"/"+id+"/reviews";
    console.log(url);
    
    return this._http.post<Review>(url,{
      'rating':review.rating,
      'description':review.description
    });
  }
}
