/////////////////////////////////////////////////////////////
// Off-Road Portal AngularClient                           //
// Bachelor's thesis software                              //
// Author and software owner Maciej Schulc                 //
// All rights reserved ®                                   //
// File: redactor.guard.ts                                 //
/////////////////////////////////////////////////////////////

import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private accountService: AccountService, private toastr: ToastrService) {}

  user = this.accountService.getCurrenUser();

  canActivate(): boolean {

    if(this.user.role == 3)
    {
      return true;
    }
    else{
      this.toastr.error('Nie jesteś Redaktorem!')
      return false;
    }
  }
}
