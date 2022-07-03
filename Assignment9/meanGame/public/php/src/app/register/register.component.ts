import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersDataService } from '../users-data.service';


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

  message!:string;

  constructor(private _formBuilder:FormBuilder,private userService:UsersDataService) {
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
    this.userService.register({
      'name':this.#registrationForm.value.name,
      'username':this.#registrationForm.value.username,
      'password':this.#registrationForm.value.password,
    }).subscribe(response=>{
      console.log(response);
      console.log("registered");
      this.#registrationForm.reset();
      this.message="Registered";
    });
  }

}
