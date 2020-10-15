import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { UsersService } from '../../services/users.service';
import { News } from '../../models/news';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit {
  constructor(public newsService: NewsService, public usersService: UsersService, private router: Router) {}

  news: News;
  title: string;
  content: string;

  ngOnInit() {
    if (this.usersService.loggedUser == false) this.router.navigate(['/login']);
    this.title = '';
    this.content = '';
  }

  add() {
    var news = {
      title: this.title,
      content: this.content,
      date: new Date()
    };
    this.newsService.addNews(news).subscribe(data => {
      this.news = data;
      this.router.navigate(['/news']);
    });
  }
}
