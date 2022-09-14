import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { ArticleService } from '../services/article.service';
import { UploadFileService } from '../services/upload-file.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  member = this.accountService.member;
  isArticleAdded: boolean = false;
  errorMessage: string = "";
  model: any = {};
  file: File | undefined;

  constructor(private articleService: ArticleService, private accountService: AccountService,
    private uploadFileService: UploadFileService) {
      articleService.getArticleById('article/', articleService.getArticleId().toString()).subscribe(
        response => {
          this.model = response;
        }, error => {
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

  editArticle(){
    if(this.file != null)
    {
      this.onUpload();
      this.model.imageUrl = '/assets/offroad_zdjecia_test/'+this.file?.name;
    }
    this.model.authorId = parseInt(this.member?.Id!)
    this.model.createdDate = new Date();
    var url = `article/${this.articleService.getArticleId()}`;
    this.articleService.updateArticle(this.model, url).subscribe(
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
