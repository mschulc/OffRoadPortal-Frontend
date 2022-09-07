import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { AccountService } from '../services/account.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  currentUser$: Observable<User> | undefined;
  errorMessage: string = "";

  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUser$;
  }

  login() {
    console.log(this.model)
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
      this.router.navigate(['/userpanel'])
    }, error => {
      console.log(error);
      if(error.error == "Invalid username of password"){
          this.errorMessage = "Błędny email lub hasło"
      }
    })
  }
}
