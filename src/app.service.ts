import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class AppService {

  constructor(@Inject(CACHE_MANAGER) private cache:Cache){}

  home(): object {
    return {api: 'Studies with nestjs 14/06'};
  }

  async resetCache(){
    await this.cache.reset()
    return {message: 'Cache resetado'}
  }

  uploadFile(file: Express.Multer.File){
    return file
  }
}
