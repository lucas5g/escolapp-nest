import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GroupModule } from './modules/group/group.module';
import { PlaceModule } from './modules/place/place.module';
import { UnityModule } from './modules/unity/unity.module';
import { UserModule } from './modules/user/user.module';
import { PointModule } from './modules/point/point.module';
import { GameModule } from './modules/game/game.module';
import { TeamModule } from './modules/team/team.module';
import { ModalityModule } from './modules/modality/modality.module';
import { GroupModule } from './modules/group/group.module';
import { PlaceModule } from './modules/place/place.module';

@Module({
  imports: [GroupModule, PlaceModule, ModalityModule, TeamModule, GameModule, PointModule, UserModule, UnityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
