import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string = 'http://localhost:8080';

  //user to log
  login: User = {
    username: '',
    password: ''
  };

  loggedUser: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  loginUser(login: User) {
    if (login.username == 'admin' && login.password == 'admin') {
      this.loggedUser = true;
      this.login.username = 'admin';
      this.router.navigate(['/editnews']);
    }
    /*
    return this.http.post(`${this.url}/users/login`, login, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders({ 'Content-type': 'application/json' })
    });
    */
  }

  logoutUser() {
    this.loggedUser = false;
    this.login.username = '';
    this.router.navigate(['/login']);
    /*
    return this.http.get(`${this.url}/users/logout`, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders({ 'Content-type': 'application/json' })
    });
    */
  }
}
