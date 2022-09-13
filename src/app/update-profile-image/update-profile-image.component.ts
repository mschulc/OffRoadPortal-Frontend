/////////////////////////////////////////////////////////////
// Off-Road Portal AngularClient                           //
// Bachelor's thesis software                              //
// Author and software owner Maciej Schulc                 //
// All rights reserved ®                                   //
// File: update-profile-image.component.ts                 //
/////////////////////////////////////////////////////////////

import { Component, OnInit } from '@angular/core';
import { UpdateProfileImg } from '../models/updateProfileImg';
import { AccountService } from '../services/account.service';
import { UploadFileService } from '../services/upload-file.service';


@Component({
  selector: 'app-update-profile-image',
  templateUrl: './update-profile-image.component.html',
  styleUrls: ['./update-profile-image.component.css']
})
export class UpdateProfileImageComponent implements OnInit {

    response: any = {};
    loading: boolean = false;
    file: File | undefined;
    member = this.accountService.member;


    constructor(private uploadFileService: UploadFileService, private accountService: AccountService) { }

    ngOnInit(): void {
    }

    onChange(event: any) {
        this.file = event.target.files[0];
    }

    onUpload() {
        var updateImg: UpdateProfileImg = {
        id: +this.member?.Id!,
        profileImageUrl: 'assets/profile/' + this.file?.name
      }
        this.accountService.updateProfileImage(updateImg).subscribe(
          r => {console.log(r);
          }, e => {
            console.log(e);
          }
        );
        this.uploadFileService.upload(this.file, "/profile").subscribe(
            response => {
              this.response = response;
              if(response != null)
              {
                this.loading = true;
                console.log(this.loading)
                console.log(response.status)
              }
            }, error => {
              console.log(error);
            }
        );
    }

}
