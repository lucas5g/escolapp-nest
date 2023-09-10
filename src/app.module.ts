import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { PointModule } from './modules/point/point.module';
import { GameModule } from './modules/game/game.module';
import { TeamModule } from './modules/team/team.module';
import { ModalityModule } from './modules/modality/modality.module';
import { GroupModule } from './modules/group/group.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { UnityModule } from './modules/unity/unity.module';
import { PlaceModule } from './modules/place/place.module';
import { StudentModule } from './modules/student/student.module';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [GroupModule, ModalityModule, TeamModule, GameModule, PointModule, UserModule, UnityModule, PrismaModule,PlaceModule, StudentModule, CacheModule.register()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
