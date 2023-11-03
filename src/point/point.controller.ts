import { Controller, Get, Query } from '@nestjs/common';
import { PointService } from './point.service';
import { ApiTags } from '@nestjs/swagger';
import { FindPointDto } from './dto/find-point.dto';

@ApiTags('Points')
@Controller('points')
export class PointController {
  constructor(private readonly pointService: PointService) {}

  @Get()
  findAll(@Query() findPointDto: FindPointDto) {
    return this.pointService.findAll(findPointDto);
  }
}
