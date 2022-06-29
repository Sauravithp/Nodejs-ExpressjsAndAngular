import { Component, OnInit } from '@angular/core';
import { CatFactServiceService } from '../cat-fact-service.service';
import { ArithmaticService } from '../arithmatic.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  cuurentYear=new Date();

  title: string="Games"

  arithmenticOpertaions:any[]=[];

  constructor(private _arithemticService: ArithmaticService) { }

  ngOnInit(): void {
    this._arithemticService.getResult().subscribe({
      next: (result)=>{
        const response=Object.values(result)
        this.arithmenticOpertaions=[...response]
      },
    });
    

  }



}
