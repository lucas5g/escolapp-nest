import { Controller, Get } from '@nestjs/common';
import { PointService } from './point.service';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from '../auth/decorators/auth.decorator';
import { AuthEntity } from '../auth/entities/auth.entity';

@ApiTags('Points')
@Controller('points')
export class PointController {
  constructor(private readonly pointService: PointService) {}

  @Get()
  findAll(@Auth() auth: AuthEntity) {
    return this.pointService.findAll(auth);
  }
}
