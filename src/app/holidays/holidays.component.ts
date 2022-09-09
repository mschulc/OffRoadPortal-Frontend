import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css']
})
export class HolidaysComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  user: User | undefined;

  currentUser = this.accountService.currentUser$.subscribe({
    next: (data) => this.user = data
  })

  ngOnInit(): void {
  }



}
