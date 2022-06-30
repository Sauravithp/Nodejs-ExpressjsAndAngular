import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


class Credentails{
  username:string;
  password:string;
  constructor(username:string,password:string){
this.username=username;
this.password=password;
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild("loginForm")
  loginForm!:NgForm;

  user:Credentails=new Credentails("jack","jill");

  constructor() { }

  ngOnInit(): void {
  }

  onLogin():void{
      console.log("Login Clicked")
      console.log(this.user.username," ",this.user.password );
  }

}
