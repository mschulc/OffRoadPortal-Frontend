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
  age = this.ageCount();
  swich: number = 1

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

  public swichNumber(value: number){
    this.swich = value;
  }
}
