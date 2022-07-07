import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Series } from '../series/series.component';
import { SeriesDataService } from '../service/series-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  #searchForm!: FormGroup

  series!: Series;

  get searchForm() {
    return this.#searchForm;
  }

  constructor(private _seriesService: SeriesDataService,private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.#searchForm=this._formBuilder.group({
      search:""
    });
  }

  onSearch(): void {
    const name = this.#searchForm.value.search;

    this._seriesService.getSeriesByName(name).subscribe({
      next: result => {
        this.series = result;
        console.log(this.series);
      }
    });
  }

}
