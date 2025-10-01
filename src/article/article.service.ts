import { Injectable } from '@nestjs/common';
import { IArticle } from './interface/article.interface';
import { CreateArticleDto } from './dto/create-article.dto';
import { randomUUID } from 'crypto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class ArticleService {
  // Resource
  private articles: IArticle[] = [];

  findAll(): IArticle[] {
    return this.articles;
  }

  createArticle(createArticleDto: CreateArticleDto) {
    const article: IArticle = {
      id: randomUUID(),
      ...createArticleDto,
    };
    this.articles.push(article);
    return article;
  }

  findAllArticle(): IArticle[] {
    return this.articles;
  }

  findOneByParams(id: string): IArticle | undefined {
    const article = this.articles.find((item) => item.id === id);
    if (!article) {
      return undefined;
    }
    return article;
  }
  updateArticleByParams(
    article: IArticle,
    UpdateArticleDto: UpdateArticleDto,
  ): IArticle {
    Object.assign(article, UpdateArticleDto);
    return article;
  }

  deleteArticleByParams(article: IArticle): void {
    this.articles = this.articles.filter(
      (filterData) => filterData.id !== article.id,
    );
    return;
  }
}
