import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  constructor(private _route:Router) { }

  ngOnInit(): void {
  }

  onAdd():void{
    this._route.navigate(["addReview/:id"]);
  }

}
