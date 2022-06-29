import { Component, OnInit } from '@angular/core';

import { GameService } from '../game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor(private gameService: GameService) { }

   games:any[] =[];

  ngOnInit(): void {

    this.gameService.getResult().subscribe({
      next: result=>{
        const response=result;
        this.games=response;
        console.log(this.games)
      }
    });

  }

}
