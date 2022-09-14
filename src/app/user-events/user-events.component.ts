/////////////////////////////////////////////////////////////
// Off-Road Portal AngularClient                           //
// Bachelor's thesis software                              //
// Author and software owner Maciej Schulc                 //
// All rights reserved ®                                   //
// File: user-events.component.ts                          //
/////////////////////////////////////////////////////////////

import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-user-events',
  templateUrl: './user-events.component.html',
  styleUrls: ['./user-events.component.css']
})
export class UserEventsComponent implements OnInit {

  constructor(private accountService: AccountService, public eventService: EventService) {
    eventService.setEventId(0);
  }

  user = this.accountService.getCurrenUser();
  member = this.accountService.member;
  swich: number = 1

  ngOnInit(): void {
  }

  public swichNumber(value: number){
    if(value == 2 || value == 3){
      this.eventService.setEventId(0);
    }
    this.swich = value;
  }

  public delete(){
    var url = `event/${this.eventService.getEventId()}`;
    this.eventService.deleteEvent(url);
    window.location.reload();
  }
}
