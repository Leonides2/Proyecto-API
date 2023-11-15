import { Module } from '@nestjs/common';
import { FooterItemService } from './footer-item.service';
import { FooterItemController } from './footer-item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FooterItem } from './entities/footer-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FooterItem])],
  controllers: [FooterItemController],
  providers: [FooterItemService],
})
export class FooterItemModule {}
