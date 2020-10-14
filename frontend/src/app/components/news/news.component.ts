import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { News } from '../../models/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
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
