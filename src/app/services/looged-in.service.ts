import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoogedInService {

  public loggedIn = false;

  constructor() { }

  setLogged(flag: boolean){
    this.loggedIn = flag;
    console.log(flag)
  }
}
