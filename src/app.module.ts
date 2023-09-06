import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlacesModule } from './modules/places/places.module';
import { UserModule } from './modules/user/user.module';
import { PointModule } from './modules/point/point.module';
import { GameModule } from './modules/game/game.module';
import { TeamModule } from './modules/team/team.module';
import { ModalityModule } from './modules/modality/modality.module';
import { GroupModule } from './modules/group/group.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { UnitiesModule } from './modules/unities/unities.module';
import { UnityModule } from './modules/unity/unity.module';
import { PlaceModule } from './modules/place/place.module';

@Module({
  imports: [GroupModule, ModalityModule, TeamModule, GameModule, PointModule, UserModule, UnityModule, PlacesModule, PrismaModule, UnitiesModule, PlaceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
