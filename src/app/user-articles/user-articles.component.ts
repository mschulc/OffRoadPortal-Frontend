/////////////////////////////////////////////////////////////
// Off-Road Portal AngularClient                           //
// Bachelor's thesis software                              //
// Author and software owner Maciej Schulc                 //
// All rights reserved ®                                   //
// File: user-articles.component.ts                        //
/////////////////////////////////////////////////////////////

import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { timeStamp } from 'console';
import { AccountService } from '../services/account.service';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-user-articles',
  templateUrl: './user-articles.component.html',
  styleUrls: ['./user-articles.component.css']
})
export class UserArticlesComponent implements OnInit {

  constructor(private accountService: AccountService, public articleService: ArticleService, private changeDetectorRef: ChangeDetectorRef) {
    articleService.setArticleId(0);
  }
  user = this.accountService.getCurrenUser();
  member = this.accountService.member;
  swich: number = 1

  ngOnInit(): void {
    this.articleService.setArticleId(0);
  }

  public swichNumber(value: number){
    if(value == 2){
      this.articleService.setArticleId(0);
    }
    this.swich = value;
  }

  public delete(){
    var url = `article/${this.articleService.getArticleId()}`;
    this.articleService.deleteArticle(url);
    window.location.reload();
  }

}
