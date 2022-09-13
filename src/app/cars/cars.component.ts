/////////////////////////////////////////////////////////////
// Off-Road Portal AngularClient                           //
// Bachelor's thesis software                              //
// Author and software owner Maciej Schulc                 //
// All rights reserved ®                                   //
// File: cars.component.ts                                 //
/////////////////////////////////////////////////////////////

import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  swich: number = 1
  constructor(public carService: CarService, private accountService: AccountService) {
    carService.setCarId(0);
  }
  member = this.accountService.member;
  ngOnInit(): void {
  }

  public swichNumber(value: number){
    this.swich = value;
  }

  public delete(){
    var url = `user/${this.member?.Id}/car/${this.carService.getCarId()}`;
    this.carService.deleteCar(url);
    window.location.reload();
  }
}
