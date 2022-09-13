import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/article';
import { AccountService } from '../services/account.service';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-list-user-articles',
  templateUrl: './list-user-articles.component.html',
  styleUrls: ['./list-user-articles.component.css']
})
export class ListUserArticlesComponent implements OnInit {

  constructor(private articleService: ArticleService, private accountService: AccountService) {
    this.articleService.getArticlesByAuthorId('article/author/', accountService.member?.Id!).subscribe(result => {
      this.articles = result;
    }, error => console.error(error));
  }

  articles: Article[] = [];

  ngOnInit(): void {
  }


  public setArticleId(articleId: number){
    this.articleService.setArticleId(articleId);
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
