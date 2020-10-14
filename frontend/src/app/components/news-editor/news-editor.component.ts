import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { News } from '../../models/news';

@Component({
  selector: 'app-news-editor',
  templateUrl: './news-editor.component.html',
  styleUrls: ['./news-editor.component.scss']
})
export class NewsEditorComponent implements OnInit {
  constructor(private route: ActivatedRoute, public newsService: NewsService) {}

  news: News;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const id = params.id;
      console.log(params);
      this.newsService.getSingleNews(id).subscribe(news => {
        this.news = news;
      });
    });
  }

  update() {
    this.newsService.updateNews(this.news);
  }
}
