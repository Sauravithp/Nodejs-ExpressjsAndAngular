import { Component, OnInit } from '@angular/core';
import { SeriesDataService } from '../service/series-data.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  series:any[]=[];

   count=5;
   offset=0;

  constructor(private _service:SeriesDataService) { }

  ngOnInit(): void {

    this._service.getAllSeries(this.offset,this.count).subscribe({
      next: (data) => {this.series=data}
    });
     
  }



}
