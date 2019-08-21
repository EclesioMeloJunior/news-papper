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

@Controller('news')
export class NewsController {
  constructor(private newsService: NewsService) {}

  @Get()
  async getNews(@Res() response) {
    const news = this.newsService.getNews();
    return response.status(HttpStatus.OK).json(news);
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

  @Put()
  async editNews(
    @Res() response,
    @Query('newsId', new ValidadeObjectId()) newsId,
    @Body() createNewsDTO: CreateNewsDTO,
  ) {
    const news = await this.newsService.editNews(newsId, createNewsDTO);
    if (!news) throw new NotFoundException('News not found');

    return response.status(HttpStatus.OK).json(news);
  }

  @Delete()
  async deleteNews(
    @Res() response,
    @Query('newsId', new ValidadeObjectId()) newsId,
  ) {
    const deletedNews = await this.newsService.deleteNews(newsId);
    if (!deletedNews) throw new NotFoundException('News not found');
    return response.status(HttpStatus.OK).json(deletedNews);
  }
}
