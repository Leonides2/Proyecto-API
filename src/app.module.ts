import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';
import { ServiceModule } from './service/service.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './company/entities/company.entity';
import { Service } from './service/entities/service.entity';
import { ProductModule } from './product/product.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'nestproject',
    entities:[Company, Service],
    autoLoadEntities: true,
    synchronize: true
  }),CompanyModule, ServiceModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
