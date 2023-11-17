import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './entities/company.entity';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private companyRepository : Repository<Company>

  ){}
  create(createCompanyDto: CreateCompanyDto) {
    return 'This action adds a new company';
  }

  findAll() {
    return this.companyRepository.find({ relations: {
      products : true,
      services : true,
      footerItems : true
    },} );
  }

  findOne(idA: number) {
    return this.companyRepository.findOne({where:{ id : idA,}, relations: { products : true,
      services : true,
      footerItems : true},});
  } 

  async update(id: number, updateCompanyDto: UpdateCompanyDto) {
    var updateCompany =  await this.companyRepository.update({id}, updateCompanyDto);
    return updateCompany;
  }

  remove(id: number) {
    return this.companyRepository.delete({id});
  }
}
