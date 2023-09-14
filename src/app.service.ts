import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  home(): object {
    return {api: 'Studies with nestjs'};
  }
}
