import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private _Activatedroute:ActivatedRoute, private articleService: ArticleService){ }

    NumerId: number | undefined;
    Author: string | undefined;
    Title: string | undefined;
    Content: string | undefined;
    Image: string | undefined;

  ngOnInit(): void {
    var id;
    this._Activatedroute.paramMap.subscribe(params => {
      id = params.get('id');
    });
    console.log(id);
    this.NumerId = id;

    var article = this.articleService.getArticles().find(x => x.Id == this.NumerId);

    this.Author = article?.Author;
    this.Content = article?.Content;
    this.Image = article?.Image;
    this.Title = article?.Title;
  }
}
