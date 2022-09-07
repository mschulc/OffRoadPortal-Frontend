import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../interfaces/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  baseURL: string = "https://localhost:7166/";

  public article: Article = ({} as any) as Article;


  constructor(private _Activatedroute:ActivatedRoute, private articleService: ArticleService, http: HttpClient){
      var id;
      this._Activatedroute.paramMap.subscribe(params => {
        id = params.get('id');
      });

      http.get<Article>(this.baseURL + 'article/'+ id).subscribe(result => {
        this.article = result;
      }, error => console.error(error));
  }

  ngOnInit(): void {
    var image = "/assets/offroad_zdjecia_test/1.jpg"
  }

}

