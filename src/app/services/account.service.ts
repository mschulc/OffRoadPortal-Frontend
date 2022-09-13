/////////////////////////////////////////////////////////////
// Off-Road Portal AngularClient                           //
// Bachelor's thesis software                              //
// Author and software owner Maciej Schulc                 //
// All rights reserved ®                                   //
// File: account.service.ts                                //
/////////////////////////////////////////////////////////////

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RegisterUser } from '../models/registerUser';
import { User } from '../models/user';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Member } from '../models/member';
import { EditUser } from '../models/editUser';
import { UpdateProfileImg } from '../models/updateProfileImg';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = environment.apiUrl;
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();
  helper = new JwtHelperService();
  public member = this.decodeTokenToMember();

  constructor(private http: HttpClient, private router: Router, private jwtHelper: JwtHelperService) { }

  login(model: any){
    return this.http.post<User>(this.baseUrl + 'account/login', model).pipe(
      map((response: User) => {
        const user = response;
        console.log('User: ', user)
        if(user){
          this.setCurrentUser(user);
        }
      })
    )
  }

  register(model: any){
    return this.http.post<RegisterUser>(this.baseUrl + 'account/register', model);
  }

  setCurrentUser(user: User){
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUserSource.next(user);
    if(user != null){
      this.currentUserSource.subscribe({
        next: (data) => console.log(`ReplaySubject: ${data.id}`)
      });
    }
  }

  getCurrenUser(): User
  {
      var user = localStorage.getItem('user');
      return JSON.parse(user!);
  }

   logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next(null!);
    this.router.navigate(['']);
    window.location.reload();
    this.router.navigate(['']);
  }
    private decodeTokenToMember()
    {
      var user = this.getCurrenUser();

      if(user)
      {
        var token = this.helper.decodeToken(user.token);
        var member: Member = {
          Id: token.Id,
          FirstName: token.FirstName,
          LastName: token.LastName,
          Role: token.Role,
          BirthDate: token.BirthDate,
          ProfileImageUrl: token.ProfileImageUrl,
          PhoneNumber: token.PhoneNumber,
          City: token.City,
          Email: token.Email,
          Cars: token.Cars
        }
         return member;
      }
      else
      {
        return null;
      }
    }

    public update(model: any){
      return this.http.patch<EditUser>(this.baseUrl + 'account/update', model);
    }

    public updateProfileImage(model :any): Observable<any> {
      return this.http.patch<UpdateProfileImg>(this.baseUrl + 'account/profileImg', model);
    }

}
