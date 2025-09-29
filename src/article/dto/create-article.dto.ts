import { IsNotEmpty, IsEnum, IsString } from 'class-validator';
import { ArticleStatus } from '../interface/article.interface';
export class CreateArticleDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  @IsEnum(ArticleStatus)
  status: ArticleStatus;
}
