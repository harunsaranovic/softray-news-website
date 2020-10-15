import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { UsersService } from '../../services/users.service';
import { News } from '../../models/news';

@Component({
  selector: 'app-news-editor',
  templateUrl: './news-editor.component.html',
  styleUrls: ['./news-editor.component.scss']
})
export class NewsEditorComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public newsService: NewsService,
    public usersService: UsersService,
    private router: Router
  ) {}

  news: News;

  ngOnInit() {
    if (this.usersService.loggedUser == false) this.router.navigate(['/login']);
    this.route.queryParams.subscribe(params => {
      const id = params.id;
      this.newsService.getSingleNews(id).subscribe(news => {
        this.news = news;
      });
    });
  }

  update() {
    console.log(this.news);
    this.newsService.updateNews(this.news).subscribe(data => {
      this.router.navigate(['/editnews']);
    });
  }
}
