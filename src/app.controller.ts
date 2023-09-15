import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './auth/public.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import { Multer } from 'multer';
import { multerConfig, validation } from './utils/multer-config';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Get()
  home() {
    return this.appService.home();
  }

  @Get('reset-cache')
  resetCache(){
    return this.appService.resetCache()
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', multerConfig)
  )
  uploadFile(@UploadedFile(validation) file: Express.Multer.File){
    return this.appService.uploadFile(file)
  }

}
