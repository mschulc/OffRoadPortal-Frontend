/////////////////////////////////////////////////////////////
// Off-Road Portal AngularClient                           //
// Bachelor's thesis software                              //
// Author and software owner Maciej Schulc                 //
// All rights reserved ®                                   //
// File: edit-profile.component.ts                         //
/////////////////////////////////////////////////////////////

import { Component, OnInit } from '@angular/core';
import { setDate } from 'ngx-bootstrap/chronos/utils/date-setters';
import { EditUser } from '../models/editUser';
import { GetUser } from '../models/getUser';
import { RegisterUser } from '../models/registerUser';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  updated: boolean = false;
  member = this.accountService.member;
  model: any = this.member;
  user = this.accountService.getCurrenUser();

  errorMessage: string = "";
  password: string | undefined;

  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
    console.log(this.member?.BirthDate)
    console.log(typeof(this.member?.BirthDate))
  }

  public setDate(birthDate: string) : Date{
    return new Date(this.model?.BirthDate!)
  }

  update(){
    this.errorMessage = "";
    var editUser: EditUser =
    {
        id: this.user.id,
        firstName: this.model?.FirstName,
        lastName: this.model?.LastName,
        birthDate: new Date(this.model?.BirthDate.toString()!),
        phoneNumber: this.model?.PhoneNumber,
        city: this.model?.City,
        passwordHash: this.password
    }
      this.accountService.update(editUser).subscribe(
        response => {
          console.log(response)
          if(response != null)
          {
            this.updated = true;
          }
        }, error => {
          if(error.error == "Invalid password")
          {
            this.errorMessage = "Błędne hasło"
          }
        }
    );
  }
}
