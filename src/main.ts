import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { PrismaExceptionFilter } from './exceptions-filter/prisma.exeption-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalFilters(new PrismaExceptionFilter())

  app.useGlobalPipes(new ValidationPipe({
    transform:true,
    errorHttpStatusCode: 422,
    whitelist:true
  }))
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
