import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UnitiesService } from './unities.service';
import { CreateUnityDto } from './dto/create-unity.dto';
import { UpdateUnityDto } from './dto/update-unity.dto';

@Controller('unities')
export class UnitiesController {
  constructor(private readonly unitiesService: UnitiesService) {}

  @Post()
  create(@Body() createUnityDto: CreateUnityDto) {
    return this.unitiesService.create(createUnityDto);
  }

  @Get()
  findAll() {
    return this.unitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.unitiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUnityDto: UpdateUnityDto) {
    return this.unitiesService.update(+id, updateUnityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.unitiesService.remove(+id);
  }
}
