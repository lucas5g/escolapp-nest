import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UseInterceptors } from '@nestjs/common';
import { ModalityService } from './modality.service';
import { CreateModalityDto } from './dto/create-modality.dto';
import { UpdateModalityDto } from './dto/update-modality.dto';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Modalities')
@Controller('modalities')
@UseInterceptors(CacheInterceptor)
export class ModalityController {
  constructor(private readonly modalityService: ModalityService) {}

  @Post()
  create(@Body() createModalityDto: CreateModalityDto) {
    return this.modalityService.create(createModalityDto);
  }

  @Get()
  findAll() {
    return this.modalityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.modalityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateModalityDto: UpdateModalityDto) {
    return this.modalityService.update(+id, updateModalityDto);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.modalityService.remove(+id);
  }
}
