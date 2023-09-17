import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { PrismaExceptionFilter } from './exceptions-filter/prisma.exeption-filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { env } from './utils/env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new PrismaExceptionFilter())

  app.useGlobalPipes(new ValidationPipe({
    transform:true,
    errorHttpStatusCode: 422,
    whitelist:true
  }))


  /**
   * Swagger
   */
  const config = new DocumentBuilder()
    .setTitle('Escolaap API')
    .setDescription('The Api Escolaap')
    .setVersion('0.1')
    .addTag('0.1')
    .build()


  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document)

  await app.listen(process.env.PORT ?? 3000);

  const appRMQ = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options:{
      urls:[env.rmq],
      queue: 'games_queue',
      queueOptions:{
        durable: false
      }
    }
  })
  
  await appRMQ.listen()
}
bootstrap();
