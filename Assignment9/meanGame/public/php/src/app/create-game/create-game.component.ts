import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { GameService } from '../game.service';


export class GameAdd {
  #title!: string;
  #rate!: number;
  #price!: number;
  #minAge!: number;
  #maxPlayers!: number;
  #minPlayers!: number


  constructor(title: string, rate: number, price: number, minAge: number, maximumPlayers: number, minimumPlayers: number) {
    this.#title = title;
    this.#rate = rate;
    this.#price = price;
    this.#minPlayers = minimumPlayers;
    this.#maxPlayers = maximumPlayers;
    this.#minAge = minAge
  }

  get title(){
    return this.#title;
  }

  get rate(){
    return this.#rate;
  }

  get price(){
    return this.#price;
  }

  get minPlayers(){
    return this.#minPlayers;
  }

  get maxPlayers(){
    return this.#maxPlayers;
  }

  get minAge(){
    return this.#minAge;
  }


}

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit {

  
  #addForm!: FormGroup;
  game!: GameAdd;
  result!:GameAdd;

get addForm(){
return this.#addForm;
}

message!:string;

  constructor(private _formBuilder:FormBuilder,private _gameService:GameService) { }

  ngOnInit(): void {
   this.#addForm=this._formBuilder.group({
    title!: "",
    rate!: "",
    price!: "",
    minAge!: "",
    maxPlayers!: "",
    minPlayers!: ""
   })
  }

  onAdd(): void {
    console.log("on add Clicked")
    console.log(this.#addForm.value.title);

    this.game =new GameAdd(this.#addForm.value.title,this.#addForm.value.rate,
      this.#addForm.value.price,this.#addForm.value.minAge,this.#addForm.value.maxPlayers,
      this.#addForm.value.minPlayers);

     this._gameService.createGame(this.game).subscribe(response=>{
      console.log(response);
      this.message="Game Added Successfully"
     })
     
     this.#addForm.reset();
  }

}
