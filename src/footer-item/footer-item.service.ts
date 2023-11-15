import { Injectable } from '@nestjs/common';
import { CreateFooterItemDto } from './dto/create-footer-item.dto';
import { UpdateFooterItemDto } from './dto/update-footer-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FooterItem } from './entities/footer-item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FooterItemService {

  constructor(
    @InjectRepository(FooterItem)
    private footerItemRepository : Repository<FooterItem>
  ){}

  create(createFooterItemDto: CreateFooterItemDto) {
    return 'This action adds a new footerItem';
  }

  findAll() {
    return this.footerItemRepository.find();
  }

  findOne(id: number) {
    return this.footerItemRepository.findOneBy({id});
  }

  update(id: number, updateFooterItemDto: UpdateFooterItemDto) {
    return `This action updates a #${id} footerItem`;
  }

  remove(id: number) {
    return this.footerItemRepository.delete({id});
  }
}
