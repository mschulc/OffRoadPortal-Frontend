import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, ReplaySubject } from 'rxjs';
import { RegisterUser } from '../models/registerUser';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = "https://localhost:7166/";
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();
  public user: User = ({} as any) as User;
  public registerUser: RegisterUser = ({} as any) as RegisterUser;
  constructor(private http: HttpClient) { }

  login(model: any){
    return this.http.post<User>(this.baseUrl + 'account/login', model).pipe(
      map((response: User) => {
        const user = response;
        this.user = response;
        if(user){
          localStorage.setItem('user', JSON.stringify(user))
          this.currentUserSource.next(user);
        }
      })
    )
  }

  register(model: any){
    return this.http.post<RegisterUser>(this.baseUrl + 'account/register', model);
  }

  setCurrentUser(user: User){
    this.currentUserSource.next(user);
  }
  getCurrenUser(): User
  {
      return this.user;
  }

  logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next(null!);
  }
}
