import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { News } from './interfaces/news.interface';
import { CreateNewsDTO } from './dto/create-news.dto';

@Injectable()
export class NewsService {
  constructor(@InjectModel('News') private readonly newsModel: Model<News>) {}

  async getNews(): Promise<News[]> {
    const news = await this.newsModel.find().exec();
    return news;
  }

  async getNewsById(newsId): Promise<News> {
    const news = await this.newsModel.findById(newsId).exec();
    return news;
  }

  async addNews(createNewsDTO: CreateNewsDTO): Promise<News> {
    const news = await this.newsModel(createNewsDTO);
    return news.save();
  }

  async editNews(newsId, createNewsDTO: CreateNewsDTO): Promise<News> {
    const editedNews = await this.newsModel.findByIdAndUpdate(
      newsId,
      createNewsDTO,
      { new: true },
    );

    return editedNews;
  }

  async deleteNews(newsId): Promise<any> {
    const deletedNews = await this.newsModel.findByIdAndRemove(newsId);
    return deletedNews;
  }
}
