/////////////////////////////////////////////////////////////
// Off-Road Portal AngularClient                           //
// Bachelor's thesis software                              //
// Author and software owner Maciej Schulc                 //
// All rights reserved ®                                   //
// File: nav-bar.component.ts                              //
/////////////////////////////////////////////////////////////

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public accountService: AccountService, private router: Router) {  }
  isExpanded = false;
  isLoggedIn = false;

  member = this.accountService.member;
  user!: User;
  profileImg = this.setProfileImage();

  currentUser = this.accountService.currentUser$.subscribe({
    next: (data) => this.user = data
  })

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  ngOnInit(): void {
  }

  logout(){
    this.accountService.logout();
    this.router.navigate(['']);
  }

  private setProfileImage(): string
  {
      if(this.member)
      {
        return this.member.ProfileImageUrl;
      }
      else
      {
        return "assets/profile/default.png";
      }
  }
}

