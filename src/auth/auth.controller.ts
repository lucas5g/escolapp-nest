import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Request,
  Patch,
} from '@nestjs/common';
import { UpdateMeAuthDto } from '@/auth/dto/update-me-auth.dto';
import { AuthService } from '@/auth/auth.service';
import { Public } from '@/auth/decorators/public.decorator';
import { LoginAuthDto } from '@/auth/dto/login-auth.dto';
import { Auth } from '@/auth/decorators/auth.decorator';
import { AuthEntity } from '@/auth/entities/auth.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() loginAuthDto: LoginAuthDto) {
    return this.authService.login(loginAuthDto);
  }

  @Get('me')
  me(@Request() req: any) {
    return req.user;
  }

  @Patch('me')
  updateMe(@Body() updateMeAuthDto: UpdateMeAuthDto, @Auth() auth: AuthEntity) {
    return this.authService.update(updateMeAuthDto, auth);
  }
}
