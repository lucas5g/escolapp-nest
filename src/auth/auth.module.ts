import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { env } from 'src/utils/env';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';
import 'dotenv/config'
@Module({
  imports:[
    UserModule,
    JwtModule.register({
      secret: env.jwtSecret ?? 'secret',
      signOptions:{ expiresIn: '7d'}
      
    })
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide:APP_GUARD,
      useClass: AuthGuard
    }
  ],
})
export class AuthModule {}
