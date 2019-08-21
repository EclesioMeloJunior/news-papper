import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { NewsSchema } from './schemas/news.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'News', schema: NewsSchema }])],
  providers: [NewsService],
  controllers: [NewsController],
})
export class NewsModule {}
