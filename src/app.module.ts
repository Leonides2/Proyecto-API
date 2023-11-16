import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';
import { ServiceModule } from './service/service.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './company/entities/company.entity';
import { Service } from './service/entities/service.entity';
import { ProductModule } from './product/product.module';
import { FooterItemModule } from './footer-item/footer-item.module';
import { FooterItem } from './footer-item/entities/footer-item.entity';
import { Product } from './product/entities/product.entity';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'nestproject',
    entities:[Company, Service, FooterItem, Product],
    autoLoadEntities: true,
    synchronize: false
  }),CompanyModule, ServiceModule, ProductModule, FooterItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
