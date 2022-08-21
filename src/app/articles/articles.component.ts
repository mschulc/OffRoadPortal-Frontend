import { Component, OnInit } from '@angular/core';
import { Article } from '../entities/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  articles: Article[] | undefined;

  ngOnInit(): void {
    this.articles = this.articleService.getArticles();
  }
}