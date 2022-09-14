import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  member = this.accountService.member;
  isEventAdded: boolean = false;
  errorMessage: string = "";
  model: any = {};
  file: File | undefined;

  constructor(private eventService: EventService, private accountService: AccountService) {}

   ngOnInit(): void {
  }

  addEvent(){
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
