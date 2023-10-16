import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { version } from '../package.json'

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private cache: Cache) { }

  home() {
    return {
      api: 'Escolaap',
      version
    };
  }

  async resetCache() {
    await this.cache.reset();
    return { message: 'Cache resetado' };
  }

  uploadFile(file: Express.Multer.File) {
    return file;
  }
}
