import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from '@app/models/news';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http: HttpClient) {}

  url: string = 'http://localhost:8080';

  news: any = {
    title: '',
    content: '',
    date: null
  };

  addNews(news: Object): Observable<News> {
    return this.http.post<News>(this.url + "/news", news, httpOptions);
  }

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(this.url + "/allnews");
  }

  getSingleNews(id: Number): Observable<News> {
    return this.http.get<News>(this.url + "/news/" + id);
  }

  updateNews(news: News): Observable<News> {
    return this.http.put<News>(this.url + "/news/" + news.id, news, httpOptions);
  }

  /*
  addUser(user: Users): Observable<Users> {
    return this.http.post<Users>(`${this.url}/users/register`, user, httpOptions);
  }

  deleteUser(id: any) {
    return this.http.delete(`${this.url}/users/delete/${id}`);
  }

  loginUser(login: login) {
    return this.http.post(`${this.url}/users/login`, login, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders({ 'Content-type': 'application/json' })
    });
  }

  logoutUser() {
    return this.http.get(`${this.url}/users/logout`, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders({ 'Content-type': 'application/json' })
    });
  }
  */
}
