import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return {api: 'Studies with nestjs'};
  }
}
