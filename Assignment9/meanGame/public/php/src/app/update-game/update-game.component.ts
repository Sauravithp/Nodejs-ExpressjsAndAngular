import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { response } from 'express';
import { GameAdd } from '../create-game/create-game.component';
import { GameService } from '../game.service';
import { Game } from '../games/games.component';

@Component({
  selector: 'app-update-game',
  templateUrl: './update-game.component.html',
  styleUrls: ['./update-game.component.css']
})
export class UpdateGameComponent implements OnInit {


  game!: Game;

  message: string = "";

  #updateForm!: FormGroup;

  get updateForm() {
    return this.#updateForm;
  }


  constructor(private router: Router, private route: ActivatedRoute, private _gameService: GameService,
    private _formBuilder: FormBuilder) {
    // const result=this.router.getCurrentNavigation()?.extras.state as {
    //   game:any
    // };
    // console.log("udapte",result.game);




  }
  ngOnInit(): void {
    const gameId = this.route.snapshot.params["gameId"];
    console.log(gameId);

    this._gameService.getGame(gameId).subscribe(response => {
      console.log("response->",response);
      this.game = new Game(response._id, response.title, response.rate, response.price,
        response.year, response.minAge, response.maxPlayers, response.minPlayers);

      this.#updateForm = this._formBuilder.group({
        title: this.game.title,
        price: this.game.price,
        rate: this.game.rate,
        minAge: this.game.minAge,
        maxPlayers: this.game.maxPlayers,
        minPlayers: this.game.minPlayers
      });

      console.log("response->",response);

    });
  }

  onUpdate(): void {
    console.log("on add Clicked")

    this.game = new Game(this.game._id, this.#updateForm.value.title, this.#updateForm.value.rate, this.#updateForm.value.price,
      this.game.year, this.#updateForm.value.minAge, 
      this.#updateForm.value.maxPlayers, 
      this.#updateForm.value.minPlayers);

    this._gameService.updateGame(this.game, this.game._id).subscribe(response => {
      console.log(response);
      this.message = "Game updated Successfully"
    })
    this.router.navigate(["games"]);
  }

}
