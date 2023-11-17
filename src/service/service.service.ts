import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Service } from './entities/service.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ServiceService {

  constructor(
    @InjectRepository(Service)
    private serviceRepository : Repository<Service>
  ){}

  create(createServiceDto: CreateServiceDto) {
    return 'This action adds a new service';
  }

  findAll() {
    return this.serviceRepository.find();
  }

  findOne(id: number) {
    return this.serviceRepository.findOneBy({id});
  }

  async update(id: number, updateServiceDto: UpdateServiceDto) {
    var updateService = this.serviceRepository.update({id}, updateServiceDto)
    return updateService;
  }

  remove(id: number) {
    return this.serviceRepository.delete({id});
  }
}
