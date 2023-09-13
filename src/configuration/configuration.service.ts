import { Global, Inject, Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Global()
@Injectable()
export class ConfigurationService {

  constructor(@Inject(CACHE_MANAGER) private cache:Cache){}

  async cacheReset(){
    await this.cache.reset()
    return {message: 'Cache resetado'}
  }
}
