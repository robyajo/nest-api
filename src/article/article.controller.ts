import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('article')
export class ArticleController {
  @Get()
  findAll(): string {
    return 'This action returns all article';
  }

  @Get('/:id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} article`;
  }
  @Post()
  create(): string {
    return 'This action adds a new article';
  }
  @Put('/:id')
  update(@Param('id') id: string): string {
    return `This action updates a #${id} article`;
  }
  @Delete('/:id')
  delete(@Param('id') id: string): string {
    return `This action removes a #${id} article`;
  }
}
