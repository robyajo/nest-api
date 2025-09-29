export interface Article {
  id: number;
  title: string;
  content: string;
  status: ArticleStatus;
}
export enum ArticleStatus {
  SUCCESS = 'SUCCESS',
  PENDING = 'PENDING',
  CANCEL = 'CANCEL',
}
