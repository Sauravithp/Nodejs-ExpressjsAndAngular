import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GameDataService } from '../game-data.service';


export class Game {
  #_id!: string;
  #title!: string;
  #rate!: Number;
  #price!: Number;
  #year!: Number;
  #minAge!: Number;
  #maxPlayers!: Number;
  #minPlayers!: Number;

  constructor(_id: string, title: string, rate: Number, year: Number, price: Number, minAge: Number, 
    maxPlayer: Number, minPlayers: Number) {
    this.#_id = _id,
      this.#rate = rate,
      this.#title = title,
      this.#year = year,
      this.#price = price,
      this.#minAge = minAge,
      this.#maxPlayers = maxPlayer,
      this.#minPlayers = minPlayers
  }

  get _id() {
    return this.#_id;
  }
  get price() {
    return this.#price;
  }
  get rate() {
    return this.#rate;
  }
  get year() {
    return this.#year;
  }

  get title() {
    return this.#title;
  }

  get minAge() {
    return this.#minAge;
  }

  get maxPlayers() {
    return this.#maxPlayers;
  }

  get minPlayers() {
    return this.#minPlayers;
  }

  set _id(_id: string) {
    this.#_id = _id;
  }

  set title(title: string) {
    this.#title = title;
  }
  set price(price: Number) {
    this.#price = price;
  }
  set rate(rate: Number) {
    this.#rate = rate;
  }

  set year(year: Number) {
    this.#year = year;
  }

  set minAge(minAge: Number) {
    this.#minAge = minAge;
  }

  set maxPlayers(maxPlayers: Number) {
    this.#maxPlayers = maxPlayers;
  }

  set minPlayers(minPlayer: Number) {
    this.#minPlayers = minPlayer;
  }
}

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games: Game[] = [];

  offset:number = 0;
  count:number = 5;
  totalCount:number=0;
  viewedCount:number=5;

  isPreviousDisabled=true;
  isNextDisabled=false;

   title:string='';

   #searchForm!:FormGroup;
   get search(){
    return this.#searchForm
   }

  constructor(private _gameService: GameDataService,private _formBuilder:FormBuilder,private _router:Router) { 
    this.#searchForm=this._formBuilder.group({
      title:""
    });
  }

  ngOnInit(): void {

    this._gameService.getGames(this.offset, this.count).subscribe((games) => {
      this.games = games;
      console.log(this.games);
    });

    this._gameService.getTotalGames().subscribe((response)=>{
      this.totalCount=response;
      console.log(this.totalCount);
    })

    if(this.offset==0){
      this.isPreviousDisabled=true;
    }

  }

  onPrevious(): void {
       this.offset=this.offset-1;
       this._gameService.getGames(this.offset, this.count).subscribe((games) => {
       this.games = games;
        console.log(this.games);
        this.viewedCount=this.viewedCount-this.count;
       });

    if(this.offset==0){
      this.isPreviousDisabled=true;
    }
  }

  onNext(): void {
    if(this.viewedCount!=this.totalCount){
      this.offset=this.offset+1;
      this._gameService.getGames(this.offset, this.count).subscribe((games) => {
      this.games = games;
       console.log(this.games);
       this.viewedCount=this.viewedCount+this.count;
       if(this.viewedCount>=this.totalCount){
        this.isNextDisabled=true;
        this.viewedCount=this.totalCount;
      }
      if(this.offset!=0){
        this.isPreviousDisabled=false;
      }
      });
    }  
  }

  onSubmit():void{
     console.log(this.#searchForm.value.title);
     this._router.navigate(["search/"+this.#searchForm.value.title]);
  }
}
