import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello! Welcome to the resource api of the company. Please use a command api/[entity] to get the data';
  }
}
