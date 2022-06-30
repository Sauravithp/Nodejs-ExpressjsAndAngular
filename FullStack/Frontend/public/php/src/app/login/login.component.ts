import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild("loginForm")
  loginForm!:NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  onLogin():void{
      console.log("Login Clicked")
      console.log(this.loginForm.value);
  }

}
