import { Component, OnInit } from '@angular/core';
import { FuelType } from '../models/car';
import { AccountService } from '../services/account.service';
import { CarService } from '../services/car.service';
import { UploadFileService } from '../services/upload-file.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  member = this.accountService.member;
  isCarAdded: boolean = false;
  errorMessage: string = "";
  model: any = {};
  file: File | undefined;

  constructor(private carService: CarService, private uploadFileService: UploadFileService, private accountService: AccountService) { }

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
          this.isCarAdded = true;
        }
          console.log(response)
        }, error => {
        console.log(error);
        this.isCarAdded = false;
      }
   );
}

  addCar(){
    if(this.file != null)
    {
      this.onUpload();
      this.model.imageUrl = '/assets/carsImages/'+this.file?.name;
    }
    else{
      this.model.imageUrl = '/assets/carsImages/defaultCar.jpg';
    }
    this.model.fuel = parseInt(this.model.fuel)
    var url = `user/${this.member?.Id}/car`;
    this.carService.addCar(this.model, url).subscribe(
      res => {
        this.isCarAdded = true;
        console.log(res);
      }, err => {
        console.log(err);
        this.isCarAdded = false;
      }
    )

    console.log(this.model)
    console.log(this.file)
  }
}
