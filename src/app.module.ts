import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PointModule } from './point/point.module';
import { TeamModule } from './team/team.module';
import { ModalityModule } from './modality/modality.module';
import { GroupModule } from './group/group.module';
import { PrismaModule } from './prisma/prisma.module';
import { UnityModule } from './unity/unity.module';
import { PlaceModule } from './place/place.module';
import { StudentModule } from './student/student.module';
import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';
import { HttpMethodLoggerMiddleware } from './middlewares/http-method-logger.middleware';
import { AuthModule } from './auth/auth.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { GameModule } from './game/game.module';
import { SetupModule } from './setup/setup.module';

@Module({
  imports: [
    GroupModule,
    ModalityModule,
    TeamModule,
    PointModule,
    UserModule,
    UnityModule,
    PrismaModule,
    PlaceModule,
    StudentModule,
    AuthModule,
    CacheModule.register({
      isGlobal: true,
      ttl: 0,
    }),
    GameModule,
    SetupModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HttpMethodLoggerMiddleware).forRoutes('*');
  }
}
