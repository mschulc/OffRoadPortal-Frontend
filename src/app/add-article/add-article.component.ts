import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { ArticleService } from '../services/article.service';
import { UploadFileService } from '../services/upload-file.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  member = this.accountService.member;
  isArticleAdded: boolean = false;
  errorMessage: string = "";
  model: any = {};
  file: File | undefined;

  constructor(private articleService: ArticleService, private accountService: AccountService,
    private uploadFileService: UploadFileService) {}

   ngOnInit(): void {
  }

  onChange(event: any) {
    this.file = event.target.files[0];
}

onUpload() {
  this.uploadFileService.upload(this.file!, "/offroad_zdjecia_test").subscribe(
      response => {
        if(response != null)
        {
          this.isArticleAdded = true;
        }
          console.log(response)
        }, error => {
        console.log(error);
        this.isArticleAdded = false;
      }
   );
}

  addArticle(){
    if(this.file != null)
    {
      this.onUpload();
      this.model.imageUrl = '/assets/offroad_zdjecia_test/'+this.file?.name;
    }
    else{
      this.model.imageUrl = '/assets/offroad_zdjecia_test/defaultArticle.jpg';
    }
    this.model.authorId = parseInt(this.member?.Id!)
    this.model.createdDate = new Date();
    var url = `article`;
    this.articleService.addArticle(this.model, url).subscribe(
      res => {
        this.isArticleAdded = true;
        console.log(res);
      }, err => {
        console.log(err);
        this.isArticleAdded = false;
      }
    )
    console.log(this.model)
    console.log(this.file)
  }
}
