import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  #registrationForm!:FormGroup;

  get registrationForm(){
    return this.#registrationForm
  }

  constructor(private _formBuilder:FormBuilder) {
    // this.#registrationForm=new FormGroup({
    //   name: new FormControl("Sauravi"),
    //   username: new FormControl("thapa"),
    //   password: new FormControl("123"),
    //   repeatPassword: new FormControl("123"),
    // });
   }

  ngOnInit(): void {
    this.#registrationForm=this._formBuilder.group({
      name:"",
      username:"",
      password:"",
      repeatPassword:""
    });
  }

  onSubmit(): void{
    console.log("submit called")
    console.log(this.#registrationForm.value);

  }

}
