import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PointModule } from './point/point.module';
import { GameModule } from './game/game.module';
import { TeamModule } from './team/team.module';
import { ModalityModule } from './modality/modality.module';
import { GroupModule } from './group/group.module';
import { PrismaModule } from './prisma/prisma.module';
import { UnityModule } from './unity/unity.module';
import { PlaceModule } from './place/place.module';
import { StudentModule } from './student/student.module';
import { CacheModule } from '@nestjs/cache-manager';
import { ConfigurationModule } from './configuration/configuration.module';
import { HttpMethodLoggerMiddleware } from './middlewares/http-method-logger.middleware';
import { AuthModule } from './auth/auth.module';
import { StudyModule } from './study/study.module';

@Module({
  imports: [GroupModule, ModalityModule, TeamModule, GameModule, PointModule, UserModule, UnityModule, PrismaModule, PlaceModule, StudentModule,
    CacheModule.register({
      isGlobal: true,
      ttl: 0
    }),
    ConfigurationModule,
    StudyModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
  
  ],
})
export class AppModule { 
  configure(consumer:MiddlewareConsumer){
    consumer.apply(HttpMethodLoggerMiddleware).forRoutes('*')
  }
}
