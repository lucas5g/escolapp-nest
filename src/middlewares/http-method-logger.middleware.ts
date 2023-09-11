
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ConfigurationService } from 'src/modules/configuration/configuration.service';

@Injectable()
export class HttpMethodLoggerMiddleware implements NestMiddleware {
  constructor(private configuration:ConfigurationService){}

  async use(req: Request, res: Response, next: NextFunction) {
    const httpMethod = req.method;

    if (httpMethod === 'POST' || httpMethod === 'DELETE' || httpMethod === 'PATCH') {
      await this.configuration.cacheReset()    
    }
    
    next();
  }
}
