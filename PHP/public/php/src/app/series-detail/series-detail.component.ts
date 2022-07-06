import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Series } from '../series/series.component';
import { SeriesDataService } from '../service/series-data.service';

@Component({
  selector: 'app-series-detail',
  templateUrl: './series-detail.component.html',
  styleUrls: ['./series-detail.component.css']
})
export class SeriesDetailComponent implements OnInit {

  series!:Series;

  constructor(private _service:SeriesDataService,private _route:ActivatedRoute) { }

  ngOnInit(): void {

    const id=this._route.snapshot.params["id"];
    this._service.getSeriesById(id).subscribe({
      next: data => {this.series=data;}
    });

  }

}
