import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { ModalityService } from './modality.service';
import { CreateModalityDto } from './dto/create-modality.dto';
import { UpdateModalityDto } from './dto/update-modality.dto';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from '../auth/decorators/auth.decorator';
import { AuthEntity } from '../auth/entities/auth.entity';

@ApiTags('Modalities')
@Controller('modalities')
// @UseInterceptors(CacheInterceptor)
export class ModalityController {
  constructor(private readonly modalityService: ModalityService) {}

  @Post()
  create(@Body() createModalityDto: CreateModalityDto) {
    return this.modalityService.create(createModalityDto);
  }

  @Get()
  findAll(@Auth() auth: AuthEntity) {
    return this.modalityService.findAll(auth);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.modalityService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateModalityDto: UpdateModalityDto,
  ) {
    return this.modalityService.update(+id, updateModalityDto);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.modalityService.remove(+id);
  }
}
