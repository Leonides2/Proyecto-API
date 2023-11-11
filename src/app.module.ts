import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';
import { PhotoModule } from './photo/photo.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [CompanyModule, PhotoModule,TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'nestproject',
    entities:[Course, Student],
    autoLoadEntities: true,
    synchronize: true
  }),
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
