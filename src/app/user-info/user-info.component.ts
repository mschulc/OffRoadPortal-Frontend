/////////////////////////////////////////////////////////////
// Off-Road Portal AngularClient                           //
// Bachelor's thesis software                              //
// Author and software owner Maciej Schulc                 //
// All rights reserved ®                                   //
// File: user-info.component.ts                            //
/////////////////////////////////////////////////////////////

import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  member = this.accountService.member;
  age = this.ageCount();

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }


  private ageCount(): number{
    if(this.member)
    {
      var yearNow = new Date().getFullYear();
      var memberBirthYear = new Date(this.member.BirthDate).getFullYear();
      return yearNow - memberBirthYear;
    }
    else{
      return 0;
    }
  }
}
