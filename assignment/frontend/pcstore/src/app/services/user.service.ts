import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    constructor(private http:HttpClient) { }
    API_BASE="http://localhost:3000/users/"

    getUsers(){
      return this.http.get<User[]>(this.API_BASE+'find');
    }

    getUserByRole(role: string){
      return this.http.get<User>(`${this.API_BASE}role/${role}`)
    }

    getUserByUsername(username: string){
      return this.http.get<User>(`${this.API_BASE}username/${username}`)
    }

    getRole(username: String, password: String){
      return this.http.get<User[]>(`${this.API_BASE}${username}/${password}`)
    }
  
}
