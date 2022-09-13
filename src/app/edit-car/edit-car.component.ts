import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car';
import { AccountService } from '../services/account.service';
import { CarService } from '../services/car.service';
import { UploadFileService } from '../services/upload-file.service';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {

  isCarUpdated: boolean = false;
  errorMessage: string = "";
  member = this.accountService.member;
  url = `user/${this.member!.Id}/car/${this.carService.getCarId()}`;
  model: any = {};

  file: File | undefined;

  constructor(private carService: CarService, private accountService: AccountService, private uploadFileService: UploadFileService) {
    carService.getCarById(this.url).subscribe(
      response => {
        console.log(response);
        this.model = response
      }, error =>
      {
        console.log(error);
      }
    )
  }

  ngOnInit(): void {
  }


  onChange(event: any) {
    this.file = event.target.files[0];
}

onUpload() {
  this.uploadFileService.upload(this.file!, "/carsImages").subscribe(
      response => {
        if(response != null)
        {
          this.isCarUpdated = true;
        }
          console.log(response)
        }, error => {
        console.log(error);
        this.isCarUpdated = false;
      }
   );
}

  editCar(){
    this.model.fuel = parseInt(this.model.fuel)
    console.log(this.model)
    if(this.file != null)
    {
      this.onUpload()
    }
    this.carService.editCar(this.model, this.url).subscribe(
      response => {
        console.log(response);
        this.isCarUpdated = true;
      }, error =>
      {
        console.log(error);
        this.isCarUpdated = false;
      }
    )
  }
}
