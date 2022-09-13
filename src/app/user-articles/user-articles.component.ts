/////////////////////////////////////////////////////////////
// Off-Road Portal AngularClient                           //
// Bachelor's thesis software                              //
// Author and software owner Maciej Schulc                 //
// All rights reserved ®                                   //
// File: user-articles.component.ts                        //
/////////////////////////////////////////////////////////////

import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-user-articles',
  templateUrl: './user-articles.component.html',
  styleUrls: ['./user-articles.component.css']
})
export class UserArticlesComponent implements OnInit {

  constructor(private accountService: AccountService, public articleService: ArticleService) {
  }
  user = this.accountService.getCurrenUser();
  member = this.accountService.member;
  swich: number = 1

  ngOnInit(): void {
  }

  public swichNumber(value: number){
    this.swich = value;
  }

  public delete(){
    var url = `user/${this.member?.Id}/car/${this.articleService.getArticleId()}`;
    this.articleService.deleteArticle(url);
    window.location.reload();
  }

}
