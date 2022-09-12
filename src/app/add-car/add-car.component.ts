import { Component, OnInit } from '@angular/core';
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
  this.uploadFileService.upload(this.file, "/carImages", this.member?.Id).subscribe(
      response => {
          console.log(response)
        }, error => {
        console.log(error);
      }
   );
}

  addCar(){


    console.log(this.model)
    console.log(this.file)
  }
}
