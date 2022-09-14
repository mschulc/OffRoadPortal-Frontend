/////////////////////////////////////////////////////////////
// Off-Road Portal AngularClient                           //
// Bachelor's thesis software                              //
// Author and software owner Maciej Schulc                 //
// All rights reserved ®                                   //
// File: article.ts                                            //
/////////////////////////////////////////////////////////////

export interface Article {
  id: number;
  title: string;
  content: string;
  authorId: number;
  author: string;
  createdDate: string;
  modifiedDate: string;
  imageUrl: string;
  comments: Array<any>;
}
