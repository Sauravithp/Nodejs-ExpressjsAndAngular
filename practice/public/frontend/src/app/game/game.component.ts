import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameDataService } from '../game-data.service';
import { Game } from '../games/games.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  game!:Game;

  constructor(private _gameService:GameDataService,private _router:ActivatedRoute) { }

  ngOnInit(): void {

    const gameId=this._router.snapshot.params["gameId"];
    this._gameService.getGameById(gameId).subscribe((game)=>{
      this.game=game;
      console.log(game);
    })

  }

}
