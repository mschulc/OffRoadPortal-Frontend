import { Component, OnInit } from '@angular/core';
import { Car, FuelType } from '../models/car';
import { AccountService } from '../services/account.service';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent implements OnInit {

  member = this.accountService.member;
  cars: Car[] = [];

  constructor(private carService: CarService, private accountService: AccountService) {
      carService.setCarId(0);
      carService.getCars(`user/${this.member?.Id}/car`).subscribe(response =>
      {
        console.log(response)
        this.cars = response
      }, error => {
        console.log(error);
      })
  }


  ngOnInit(): void {

  }

  public setFuelType(fuel: number){
    return FuelType[fuel];
  }

  public setCarId(carId: number){
    this.carService.setCarId(carId);
  }
}
