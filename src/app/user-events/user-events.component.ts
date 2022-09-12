/////////////////////////////////////////////////////////////
// Off-Road Portal AngularClient                           //
// Bachelor's thesis software                              //
// Author and software owner Maciej Schulc                 //
// All rights reserved ®                                   //
// File: user-events.component.ts                          //
/////////////////////////////////////////////////////////////

import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-user-events',
  templateUrl: './user-events.component.html',
  styleUrls: ['./user-events.component.css']
})
export class UserEventsComponent implements OnInit {

  swich: number = 1

  constructor(private accountService: AccountService) {
  }
  user = this.accountService.getCurrenUser();

  ngOnInit(): void {
  }

  public swichNumber(value: number){
    this.swich = value;
  }
}
