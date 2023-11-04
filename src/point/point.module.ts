import { Module } from '@nestjs/common';
import { PointService } from './point.service';
import { PointController } from './point.controller';
import { GroupModule } from 'src/group/group.module';
import { UnityModule } from 'src/unity/unity.module';

@Module({
  imports: [GroupModule, UnityModule],
  controllers: [PointController],
  providers: [PointService],
})
export class PointModule {}
