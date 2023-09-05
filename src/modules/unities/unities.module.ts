import { Module } from '@nestjs/common';
import { UnitiesService } from './unities.service';
import { UnitiesController } from './unities.controller';

@Module({
  controllers: [UnitiesController],
  providers: [UnitiesService],
})
export class UnitiesModule {}
