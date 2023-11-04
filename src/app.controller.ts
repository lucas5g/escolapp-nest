import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './auth/decorators/public.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerConfig, validation } from './utils/multer-config';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Get()
  home() {
    return this.appService.home();
  }

  @Get('reset-cache')
  resetCache() {
    return this.appService.resetCache();
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', multerConfig))
  uploadFile(@UploadedFile(validation) file: Express.Multer.File) {
    return this.appService.uploadFile(file);
  }

  @MessagePattern({ cmd: 'greeting' })
  getGreetingMessage(name: string) {
    return `Hello ${name}`;
  }

  @MessagePattern({ cmd: 'greeting-async' })
  async getGreetingMessageAsync(name: string) {
    return `Hello ${name} Async`;
  }

  @EventPattern('book-created')
  async handleBookCreatedEvent(data: Record<string, unknown>) {
    console.log(data);
  }
}
