import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../game.service';
import { Game } from '../games/games.component';

@Component({
  selector: 'app-delete-game',
  templateUrl: './delete-game.component.html',
  styleUrls: ['./delete-game.component.css']
})
export class DeleteGameComponent implements OnInit {

  game!:Game;


  constructor(private _gameService:GameService, private _router:ActivatedRoute) { }

  ngOnInit(): void {

    const _gameId=this._router.snapshot.params["gameId"];

    this._gameService.deleteGame(_gameId).subscribe({
      next: data => {
          this.game = data;
      }
  })
  }

}
