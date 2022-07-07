import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersDataService } from '../users-data.service';


export class Credentails {
  username: string;
  password: string;
  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild("loginForm")
  loginForm!: NgForm;

  user: Credentails = new Credentails("sauravi", "jill");

  constructor(private service:UsersDataService) {
  }

  ngOnInit(): void {
    console.log("init called");

    setTimeout(() => {
      this.loginForm.setValue(this.user);
    }, 0);
  }

  onLogin(): void {
    console.log("Login Clicked")
    // console.log(this.user.username," ",this.user.password );
    console.log(this.loginForm.value);
     const login:Credentails=new Credentails(this.loginForm.value.username,this.loginForm.value.password)
    this.service.login(login).subscribe({
      next: loginResult=>{},
      error: error=>{},
      complete: ()=>{
        
      }
    });
  }

}
