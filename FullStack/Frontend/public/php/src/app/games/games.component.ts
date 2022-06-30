import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';


export class Game {
  #_id!: String;
  #title!: String;
  #minPlayers!: number;
  #maxPlayers!: number;
  #rate!: number;
  #minAge!: number;
  #price!: number;
  #year!: number;

  constructor() { }

  get _id() {
    return this.#_id;
  }
  get title() {
    return this.#title;
  }
  get minPlayers() {
    return this.#minPlayers;
  }
  get maxPlayers() {
    return this.#maxPlayers;
  }
  get rate() {
    return this.#rate;
  }
  get price() {
    return this.#price;
  }
  get minAge() {
    return this.#minAge;
  }
  get year() {
    return this.#year;
  }

  set _id(_id) {
    this.#_id = _id;
  }
  set title(title) {
    this.#title = title;
  }

  set price(price) {
    this.#price = price;
  }

  set rate(rate) {
    this.#rate = rate;
  }

  set minPlayers(minPlayers) {
    this.#minPlayers = minPlayers;
  }

  set maxPlayers(maxPlayers) {
    this.#maxPlayers = maxPlayers;
  }

  set year(year) {
    this.#year = year;
  }

  set minAge(minAge) {
    this.#minAge = minAge;
  }
 
}

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games: Game[] = [];

  constructor(private _gameservice: GameService) { }

  ngOnInit(): void {
    this._gameservice.getGames().subscribe(response => {
      const games = response;
      this.games = games;
      console.log(this.games);
    });
  }

}
