import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { FooterItemService } from './footer-item.service';
import { CreateFooterItemDto } from './dto/create-footer-item.dto';
import { UpdateFooterItemDto } from './dto/update-footer-item.dto';

@Controller('api/footer-item')
export class FooterItemController {
  constructor(private readonly footerItemService: FooterItemService) {}

  @Post()
  create(@Body() createFooterItemDto: CreateFooterItemDto) {
    return this.footerItemService.create(createFooterItemDto);
  }

  @Get()
  findAll() {
    return this.footerItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.footerItemService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateFooterItemDto: UpdateFooterItemDto) {
    return this.footerItemService.update(+id, updateFooterItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.footerItemService.remove(+id);
  }
}
