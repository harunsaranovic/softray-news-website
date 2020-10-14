import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { News } from '../../models/news';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editnews',
  templateUrl: './editnews.component.html',
  styleUrls: ['./editnews.component.scss']
})
export class EditnewsComponent implements OnInit {
  constructor(public newsService: NewsService) {}

  //News
  news: News[];

  ngOnInit() {
    this.newsService.getNews().subscribe(news => {
      this.news = news;
      console.log(this.news);
    });
  }
}
