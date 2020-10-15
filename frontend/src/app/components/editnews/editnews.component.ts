import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { UsersService } from '../../services/users.service';
import { News } from '../../models/news';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editnews',
  templateUrl: './editnews.component.html',
  styleUrls: ['./editnews.component.scss']
})
export class EditnewsComponent implements OnInit {
  constructor(private newsService: NewsService, private router: Router, private usersService: UsersService) {}

  news: News[];

  ngOnInit() {
    if (this.usersService.loggedUser == false) this.router.navigate(['/login']);
    this.newsService.getNews().subscribe(news => {
      this.news = news;
      console.log(this.news);
    });
  }
}
