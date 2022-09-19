/////////////////////////////////////////////////////////////
// Off-Road Portal AngularClient                           //
// Bachelor's thesis software                              //
// Author and software owner Maciej Schulc                 //
// All rights reserved ®                                   //
// File: racing.component.ts                               //
/////////////////////////////////////////////////////////////


import { Component, OnInit } from '@angular/core';
import { VehicleType, _Event } from '../models/event';
import { User } from '../models/user';
import { AccountService } from '../services/account.service';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-racing',
  templateUrl: './racing.component.html',
  styleUrls: ['./racing.component.css']
})
export class RacingComponent implements OnInit {

  events: _Event[] = [];

  constructor(private accountService: AccountService, private eventService: EventService) {
    this.eventService.getEventByCategory('event/category/', '1').subscribe(
        result => {this.events = result;
        console.log(result);
      }, error => {
        console.log(error);
      }
    )
  }

  user: User | undefined;

  currentUser = this.accountService.currentUser$.subscribe({
    next: (data) => this.user = data
  })

  ngOnInit(): void {
  }

  public setVehicleType(type: number){
    return VehicleType[type];
  }

}
