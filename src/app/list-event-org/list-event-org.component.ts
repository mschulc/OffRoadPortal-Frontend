import { Component, OnInit } from '@angular/core';
import { _Event } from '../models/event';
import { AccountService } from '../services/account.service';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-list-event-org',
  templateUrl: './list-event-org.component.html',
  styleUrls: ['./list-event-org.component.css']
})
export class ListEventOrgComponent implements OnInit {

  member = this.accountService.member;
  constructor(private eventService: EventService, private accountService: AccountService) {
    eventService.setEventId(0);
    this.eventService.getEventsByParticipant('event/participant/', this.member?.Id!).subscribe(
      result => {
        this.events = result;
        console.log(result)
      }, error => {
        console.log(error);
      });
    }
    events: _Event[] = [];

  ngOnInit(): void {
  }

  public setEventId(eventId: number){
    this.eventService.setEventId(eventId);
  }

}
