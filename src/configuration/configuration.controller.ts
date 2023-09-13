import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConfigurationService } from './configuration.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Configurations')
@Controller('configurations')
export class ConfigurationController {
  constructor(private readonly configurationService: ConfigurationService) {}

  @Get('cache-reset')
  cacheReset(){
    return this.configurationService.cacheReset()
  }

}
