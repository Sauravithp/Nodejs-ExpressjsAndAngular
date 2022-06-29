import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './start-rating.component.html',
  styleUrls: ['./start-rating.component.css']
})
export class StartRatingComponent implements OnInit {


  _rating : number=0;
   stars: number[]=[];
  @Input()
  set rating(rating:number){
    this._rating=rating;
    this.stars=new Array<number>(rating);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
