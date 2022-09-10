/////////////////////////////////////////////////////////////
// Off-Road Portal AngularClient                           //
// Bachelor's thesis software                              //
// Author and software owner Maciej Schulc                 //
// All rights reserved ®                                   //
// File: userpanel.component.ts                            //
/////////////////////////////////////////////////////////////

import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-userpanel',
  templateUrl: './userpanel.component.html',
  styleUrls: ['./userpanel.component.css']
})
export class UserpanelComponent implements OnInit {

  constructor(private accountService: AccountService) {
   }

  user = this.accountService.getCurrenUser();
  member = this.accountService.member;
  swich: number = 1

  ngOnInit(): void {
  }

  public swichNumber(value: number){
    this.swich = value;
  }
}
