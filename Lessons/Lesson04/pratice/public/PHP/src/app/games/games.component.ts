import { Component, OnInit } from '@angular/core';

import { GameService } from '../game.service';


class Game{
  #_id!:String;
  #title!: String;
  #year!: number;
  #rate!: number;
  #minPlayers!:number;
  #maxPlayers!: number;
  #minAge!: number


  // getter setter

  constructor() { }

}

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor(private gameService: GameService) { }

  gamesList:Game[]=[];

    // constructor() { }


   games:any[] =[];

  ngOnInit(): void {

    // this.gameService.getResult().subscribe({
      // next: result=>{
      //   const response=result;
      //   this.games=response;
      //   console.log(this.games)
      // }
    };

  }


