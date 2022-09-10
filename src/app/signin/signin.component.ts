/////////////////////////////////////////////////////////////
// Off-Road Portal AngularClient                           //
// Bachelor's thesis software                              //
// Author and software owner Maciej Schulc                 //
// All rights reserved ®                                   //
// File: signin.component.ts                               //
/////////////////////////////////////////////////////////////

import { Component, Input, OnInit } from '@angular/core';
import { RegisterUser } from '../models/registerUser';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  @Input()

  public registerUser: RegisterUser = ({} as any) as RegisterUser;
  errorMessage: string = "";
  model: any = {};
  isRegistered: boolean = false;
  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
  }

  register(){
    this.errorMessage = "";
    this.accountService.register(this.model).subscribe(response => {
      this.registerUser = response;
      if(response == null)
      {
          this.isRegistered = true;
      }
      console.log(response);
    }, error => {
      console.log(error);
      if(error.error == "That email is already used")
      {
          this.errorMessage = "Ten email jest już zajęty";
      }
      if(error.error == "Passwords must be the same")
      {
          this.errorMessage = "Hasła muszą być takie same";
      }
      if(error.error == "Password length must be at least 8")
      {
          this.errorMessage = "Hasło jest zbyt krótkie";
      }
      if(error.error == "Email field is incorrect")
      {
          this.errorMessage = "Pole email jest niepoprawne";
      }
      if(error.error == "Password field is empty")
      {
          this.errorMessage = "Pole hasło nie może być puste";
      }
    });
    console.log(this.model);
  }

  cancel(){
    console.log('wyczysc');
  }
}
