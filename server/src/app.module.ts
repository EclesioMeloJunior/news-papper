import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NewsModule } from './news/news.module';

const uri = 'mongodb://localhost/newspapper';

@Module({
  imports: [MongooseModule.forRoot(uri, { useNewUrlParser: true }), NewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
