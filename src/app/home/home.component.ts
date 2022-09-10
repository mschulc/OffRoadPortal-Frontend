/////////////////////////////////////////////////////////////
// Off-Road Portal AngularClient                           //
// Bachelor's thesis software                              //
// Author and software owner Maciej Schulc                 //
// All rights reserved ®                                   //
// File: home.component.ts                                 //
/////////////////////////////////////////////////////////////


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
   }

  ngOnInit(): void {
    if(localStorage.getItem('loggedIn') != "true")
    {
        localStorage.setItem('loggedIn', 'true')
        window.location.reload();
    }
  }
}
