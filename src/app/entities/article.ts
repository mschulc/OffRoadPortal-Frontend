

export class Article
 {
    Id: number | undefined;
    Title: string | undefined;
    Content: string = "";
    Author: string | undefined;
    Image: string | undefined;

    ShortDisplayText(): String
    {
      if(this.Content.length > 300)
      {
        return this.Content.slice(0, 300) + "...";
      }
      else {
        return this.Content;
      }
    }
 }
