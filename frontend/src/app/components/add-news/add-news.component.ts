import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { News } from '../../models/news';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit {
  constructor(public newsService: NewsService, private router: Router) { }

  news : News;
  title: string;
  content: string;

  ngOnInit() {
    this.title = "a";
    this.content = "a";
  }

  add() {
    var news = {
      title: this.title,
      content: this.content,
      date: new Date()
    }
    this.newsService.addNews(news).subscribe(data => {
      this.news = data; 
      this.router.navigate(['/news']);
    });
  }
}
