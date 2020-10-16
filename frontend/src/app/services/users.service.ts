import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' })
};

const requestOptions: Object = {
  responseType: 'text'
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

  loginUser(login: User): Observable<any> {
    return this.http.post<any>(this.url + '/login', login, requestOptions);
  }

  logoutUser() {
    this.loggedUser = false;
    this.login.username = '';
    this.router.navigate(['/login']);
  }
}
