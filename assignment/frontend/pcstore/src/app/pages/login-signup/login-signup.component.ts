import { Component } from '@angular/core';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent {
  username : string ="";
  password : string ="";
  show: boolean= false;
  
  submit(){
    console.log("user name is " + this.username)
    this.clear();
  }
  clear(){
    this.username ="";
    this.password = "";
    this.show = true;
  }
}
