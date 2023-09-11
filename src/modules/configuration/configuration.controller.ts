import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConfigurationService } from './configuration.service';
import { CreateConfigurationDto } from './dto/create-configuration.dto';
import { UpdateConfigurationDto } from './dto/update-configuration.dto';

@Controller('configuration')
export class ConfigurationController {
  constructor(private readonly configurationService: ConfigurationService) {}

  @Get('cache-reset')
  cacheReset(){
    return this.configurationService.cacheReset()
  }

}
