import { Test, TestingModule } from '@nestjs/testing';
import { FooterItemController } from './footer-item.controller';
import { FooterItemService } from './footer-item.service';

describe('FooterItemController', () => {
  let controller: FooterItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FooterItemController],
      providers: [FooterItemService],
    }).compile();

    controller = module.get<FooterItemController>(FooterItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
