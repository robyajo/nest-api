import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import * as articleInterface from './interface/article.interface';
import { FindOneParams } from './dto/find-one.params';
import { UpdateArticleDto } from './dto/update-article.dto';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}
  @Get()
  findAll(): articleInterface.IArticle[] {
    return this.articleService.findAllArticle();
  }

  @Get('/:id')
  findOne(@Param() params: FindOneParams): articleInterface.IArticle {
    return this.findOneOrFail(params.id);
  }
  @Post()
  create(
    @Body() createArticleDto: CreateArticleDto,
  ): articleInterface.IArticle {
    return this.articleService.createArticle(createArticleDto);
  }
  @Put('/:id')
  update(
    @Param() params: FindOneParams,
    @Body() updateArticleDto: UpdateArticleDto,
  ): articleInterface.IArticle {
    const article = this.findOneOrFail(params.id);
    return this.articleService.updateArticleByParams(article, updateArticleDto);
  }
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param() params: FindOneParams): void {
    const article = this.findOneOrFail(params.id);
    this.articleService.deleteArticleByParams(article);
  }

  private findOneOrFail(id: string): articleInterface.IArticle {
    const article = this.articleService.findOneByParams(id);
    if (!article) {
      throw new NotFoundException();
    }
    return article;
  }
}
