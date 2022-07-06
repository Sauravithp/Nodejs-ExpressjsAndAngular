import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from '../series/series.component';
import { ReviewDataService } from '../service/review-data.service';

export class AddReview {
  #rating!: number;
  #description!: string;

  constructor(rating: number, description: string) {
    this.#rating = rating;
    this.#description = description;
  }

  get rating() {
    return this.#rating;
  }
  get description() {
    return this.#description;
  }

}

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  seriesId!:string;

  constructor(private _service:ReviewDataService,private _route:ActivatedRoute,private _router:Router) { }

  ngOnInit(): void {
    this.seriesId=this._route.snapshot.params["id"];
    console.log(this.seriesId);
  }

  onAdd():void{
    let review=new AddReview(4,"Better");
    console.log("request body",review);
    this._service.saveReviewBySeriesId(this.seriesId,review).subscribe({
      next: data=> console.log(data)
    });
    this._router.navigate(["reviews//"+this.seriesId]);
  }

}
