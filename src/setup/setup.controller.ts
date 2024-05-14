import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SetupService } from './setup.service';
import { CreateSetupDto } from './dto/create-setup.dto';
import { UpdateSetupDto } from './dto/update-setup.dto';
import { Auth } from '@/auth/decorators/auth.decorator';
import { AuthEntity } from '@/auth/entities/auth.entity';

@Controller('setup')
export class SetupController {
  constructor(private readonly setupService: SetupService) {}

  @Post()
  create(@Body() createSetupDto: CreateSetupDto) {
    return this.setupService.create(createSetupDto);
  }

  @Get()
  findAll(@Auth() auth: AuthEntity) {
    return this.setupService.findAll(auth);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.setupService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSetupDto: UpdateSetupDto) {
    return this.setupService.update(+id, updateSetupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.setupService.remove(+id);
  }
}
