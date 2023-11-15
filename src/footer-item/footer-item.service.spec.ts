import { Test, TestingModule } from '@nestjs/testing';
import { FooterItemService } from './footer-item.service';

describe('FooterItemService', () => {
  let service: FooterItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FooterItemService],
    }).compile();

    service = module.get<FooterItemService>(FooterItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
