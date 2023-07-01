import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit{
  // gotToken = false;
  show: boolean= false;
  users!: User[];
  user!: User[]
  tokenFromUI: string = "0123456789123456";
  encrypted: any = "";
  request: string | undefined;

  loginFormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    role: new FormControl<String>('')
  });
  rolez!: String;
 

  constructor(private userService: UserService){
    // this.encryptUsingAES256();
  }

  ngOnInit(): void {
      this.userService.getUsers().subscribe((data)=>this.users=data)
  }

  onLogin(){
      var temp = this.loginFormGroup.value as User;
     var tempuser = temp.username
     var temppass = temp.password
     this.encrypted
    // this.getToken(temp)
    this.userService.getRole(tempuser, temppass).subscribe((data)=> {
      this.user = data;
      this.rolez = this.user[0].role
      // console.log(this.user[0].role),
      // console.log(this.loginFormGroup.value)
    });
    
    this.show = true
    
  }
  //password encryption
  // encryptUsingAES256() {
  //   var temp = this.loginFormGroup.value as User;
  //   this.request = temp.password.toString();
  //   let _key = CryptoJS.enc.Utf8.parse(this.tokenFromUI);
  //   let _iv = CryptoJS.enc.Utf8.parse(this.tokenFromUI);
  //   let encrypted = CryptoJS.AES.encrypt(
  //     JSON.stringify(this.request), _key, {
  //       keySize: 16,
  //       iv: _iv,
  //       mode: CryptoJS.mode.ECB,
  //       padding: CryptoJS.pad.Pkcs7
  //     });
  //   this.encrypted = encrypted.toString();
  // }

  //jwt
  // getToken(temp:any){
  //   this.http.post<any>('http://localhost:3000/auth/connect', {username: temp.username, password: temp.password})
  //     .subscribe((data) =>{
  //       console.log(data);
  //       localStorage.setItem(
  //         environment.tokenStorageKey,
  //         data!['token']! as string
  //       )
  //     })
  // }
    
  // clear(){
  //   this.username ="";
  //   this.password = "";
  //   this.show = true;
  // }

  
}
