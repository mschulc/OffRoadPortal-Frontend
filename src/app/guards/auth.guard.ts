import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';
import { AccountService } from '../services/account.service';
import { User } from '../models/user';

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
