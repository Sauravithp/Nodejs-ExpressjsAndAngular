import { Component, OnInit } from '@angular/core';
import { SeriesDataService } from '../service/series-data.service';


export class Review {
  #_id!: string;
  #rating!: number;
  #description!: string;

  constructor(_id: string, rating: number, description: string) {
    this.#_id = _id;
    this.#rating = rating;
    this.#description = description;
  }

  get _id() {
    return this.#_id;
  }
  get rating() {
    return this.#rating;
  }
  get description() {
    return this.#description;
  }

}

export class Series {
  #_id!: string;
  #name!: string;
  #language!: string;
  #genre!: string;
  #presentYear!: string;
  #review!: [Review]

  constructor(_id: string, name: string, language: string, genre: string, presentYear: string, review: [Review]) {
    this.#_id = _id;
    this.#name = name;
    this.#language = language;
    this.#genre = genre;
    this.#presentYear = presentYear;
    this.#review = review;
  }

  get _id() {
    return this.#_id;
  }

  get name() {
    return this.#name;
  }

  get language() {
    return this.#language;
  }

  get genre() {
    return this.#genre;
  }

  get presentYear() {
    return this.#presentYear;
  }

  get review() {
    return this.#review;
  }

}

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  seriesList: Series[] = [];

  count = 5;
  offset = 0;

  constructor(private _service: SeriesDataService) { }

  ngOnInit(): void {

    this._service.getAllSeries(this.offset, this.count).subscribe({
      next: (data) => {
        this.seriesList = data;
        console.log(this.seriesList);
      }
    });

  }



}
