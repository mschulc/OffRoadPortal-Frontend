/////////////////////////////////////////////////////////////
// Off-Road Portal AngularClient                           //
// Bachelor's thesis software                              //
// Author and software owner Maciej Schulc                 //
// All rights reserved ®                                   //
// File: article.component.ts                              //
/////////////////////////////////////////////////////////////

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Article } from '../interfaces/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  baseURL: string = environment.apiUrl;

  public article: Article = ({} as any) as Article;
  id: string | null = "";

  constructor(private _ActivatedRoute:ActivatedRoute, private articleService: ArticleService){

      this._ActivatedRoute.paramMap.subscribe(params => {
        this.id = params.get('id');
      });

      this.articleService.getArticleById('article/', this.id!).subscribe(result => {
        this.article = result;
      }, error => console.error(error));
  }

  ngOnInit(): void {
  }
}

