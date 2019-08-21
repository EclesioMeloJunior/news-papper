import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Param,
  NotFoundException,
  Post,
  Body,
  Put,
  Query,
  Delete,
} from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDTO } from './dto/create-news.dto';
import { ValidadeObjectId } from '../shared/pipes/validate-object-id';
import { getEnabledCategories } from 'trace_events';

@Controller('news')
export class NewsController {
  constructor(private newsService: NewsService) {}

  @Get()
  async getNews(@Res() response) {
    const news = await this.newsService.getNews();
    return response.status(HttpStatus.OK).json(news);
  }

  @Get('categories')
  getCategories(@Res() response) {
    const categories = this.newsService.getCategories();
    return response.status(HttpStatus.OK).json(categories);
  }

  @Get(':newsId')
  async getNewsById(
    @Res() response,
    @Param('newsId', new ValidadeObjectId()) newsId,
  ) {
    const news = await this.newsService.getNewsById(newsId);
    if (!news) throw new NotFoundException('News not found');
    return response.status(HttpStatus.OK).json(news);
  }

  @Post()
  async addNews(@Res() response, @Body() createNewsDTO: CreateNewsDTO) {
    const news = await this.newsService.addNews(createNewsDTO);
    return response.status(HttpStatus.CREATED).json(news);
  }

  @Put(':newsId')
  async editNews(
    @Res() response,
    @Param('newsId', new ValidadeObjectId()) newsId,
    @Body() createNewsDTO: CreateNewsDTO,
  ) {
    const news = await this.newsService.editNews(newsId, createNewsDTO);
    if (!news) throw new NotFoundException('News not found');

    return response.status(HttpStatus.OK).json(news);
  }

  @Delete(':newsId')
  async deleteNews(
    @Res() response,
    @Param('newsId', new ValidadeObjectId()) newsId,
  ) {
    const deletedNews = await this.newsService.deleteNews(newsId);
    if (!deletedNews) throw new NotFoundException('News not found');
    return response.status(HttpStatus.OK).json(deletedNews);
  }
}
