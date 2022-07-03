import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameDataService } from '../game-data.service';
import { Game } from '../games/games.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  game!:Game;

  constructor(private _gameService:GameDataService,private _router:ActivatedRoute) { }

  ngOnInit(): void {
    const title=this._router.snapshot.params["title"];
    this._gameService.search(title).subscribe((game)=>{
      this.game=game;
      console.log(game);
    })
  }

}
