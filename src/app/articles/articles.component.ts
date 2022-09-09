import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Article } from '../interfaces/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  public articles: Article[] = [];
  baseURL: string = environment.apiUrl;

  constructor(private articleService: ArticleService, http: HttpClient) {
    http.get<Article[]>(this.baseURL + 'article').subscribe(result => {
      this.articles = result;
    }, error => console.error(error));
  }

  ngOnInit(): void {
  }

  ShortDisplayText(Content: string): string
    {
      if(Content.length > 300)
      {
        return Content.slice(0, 300) + "...";
      }
      else {
        return Content;
      }
    }
}
