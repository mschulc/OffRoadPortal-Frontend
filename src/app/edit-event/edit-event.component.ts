import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  member = this.accountService.member;
  isEventAdded: boolean = false;
  errorMessage: string = "";
  model: any = {};
  file: File | undefined;

  constructor(private eventService: EventService, private accountService: AccountService) {}

   ngOnInit(): void {
  }

  editEvent(){
    this.model.authorId = parseInt(this.member?.Id!)
    this.model.createdDate = new Date();
    var url = `article`;
    this.eventService.addEvent(this.model, url).subscribe(
      res => {
        this.isEventAdded = true;
        console.log(res);
      }, err => {
        console.log(err);
        this.isEventAdded = false;
      }
    )
    console.log(this.model)
    console.log(this.file)
  }

}
