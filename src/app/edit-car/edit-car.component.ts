import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {

  isCarUpdated: boolean = false;
  errorMessage: string = "";
  model: any = {};
  file: File | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event: any) {
    this.file = event.target.files[0];
}

  addCar(){

  }
}
