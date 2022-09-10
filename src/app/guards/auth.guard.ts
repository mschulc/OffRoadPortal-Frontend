import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private accountService: AccountService, private toastr: ToastrService) {}

  user = this.accountService.getCurrenUser();

  canActivate(): boolean {

    if(this.user)
    {
      return true;
    }
    else{
      this.toastr.error('Musisz się zalogować')
      return false;
    }
  }
}
