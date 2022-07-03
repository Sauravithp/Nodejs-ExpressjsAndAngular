import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameDataService } from '../game-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  message!:string;

  constructor(private _gameService:GameDataService,private _route:ActivatedRoute,private _router:Router) { }

  ngOnInit(): void {

    const gameId=this._route.snapshot.params["gameId"];

    this._gameService.deletGameById(gameId).subscribe((response)=>{
      this.message=response;
      this._router.navigate(["games"]);
    })

  }

}
