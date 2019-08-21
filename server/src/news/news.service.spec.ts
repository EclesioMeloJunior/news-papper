import { Test, TestingModule } from '@nestjs/testing';
import { NewsService } from './news.service';

describe('NewsService', () => {
  let service: NewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewsService],
    }).compile();

    service = module.get<NewsService>(NewsService);
  });

  describe('[Method] getNews', () => {
    it('When called should return a list of news', () => {
      const news = service.getNews();
      expect(news).toBeGreaterThanOrEqual(0);
    });
  });
});
