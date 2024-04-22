import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AppService } from 'src/app.service';
@Injectable()
export class HttpMethodLoggerMiddleware implements NestMiddleware {
  constructor(private app: AppService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const httpMethod = req.method;

    if (
      httpMethod === 'POST' ||
      httpMethod === 'DELETE' ||
      httpMethod === 'PATCH'
    ) {
      await this.app.resetCache();
    }

    next();
  }
}
