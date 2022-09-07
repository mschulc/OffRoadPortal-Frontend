export interface Article {
  id: number;
  title: string;
  content: string;
  authorId: number;
  author: string;
  createdDate: string;
  modifiedDate: string;
  imageUrl: string;
  comments: Array<object>;
}
