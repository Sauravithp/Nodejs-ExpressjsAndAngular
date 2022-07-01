import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../game.service';
import { Game } from '../games/games.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {


  game!:Game;

  constructor(private _gameService:GameService,private route:ActivatedRoute, private _router:Router) { }

  ngOnInit(): void {

    const gameId= this.route.snapshot.params["gameId"];

    this._gameService.getGame(gameId).subscribe(response=>{
      const game=response;
      this.game=game;
      console.log(this.game);
    });
  }

  onDelete(_id:any):void{
    console.log(_id)
    this._gameService.getGame(_id).subscribe(response=>{
      const game=response;
      this.game=game;
      console.log(this.game);
    });
  }
}
