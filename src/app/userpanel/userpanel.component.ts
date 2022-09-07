import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-userpanel',
  templateUrl: './userpanel.component.html',
  styleUrls: ['./userpanel.component.css']
})
export class UserpanelComponent implements OnInit {

  constructor(public accountService: AccountService) { }

  user = this.accountService.getCurrenUser();
  token = this.user.token!;

  ngOnInit(): void {

  }





}
